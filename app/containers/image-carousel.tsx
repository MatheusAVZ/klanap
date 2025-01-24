import { useState, useEffect } from "react"

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/placeholder.svg?height=600&width=1920",
    "/placeholder.svg?height=600&width=1920",
    "/placeholder.svg?height=600&width=1920",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide || "/placeholder.svg"} alt={`Banner slide ${index + 1}`} className="object-cover" />
        </div>
      ))}
    </div>
  )
}

