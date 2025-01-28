import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { homeImages } from '~/utils/constants';

export function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {homeImages.map((img, index) => (
          <img key={index} src={img} className="flex-[0_0_100%]" alt="image_" />
        ))}
      </div>
    </div>
  );
}
