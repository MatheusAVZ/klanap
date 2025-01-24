import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-bold">Logo 1</div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              home
            </Link>
            <Link to="/quem-somos" className="text-gray-700 hover:text-gray-900">
              quem somos
            </Link>
            <Link to="/produtos" className="text-gray-700 hover:text-gray-900">
              produtos
            </Link>
            <Link to="/fale-conosco" className="text-gray-700 hover:text-gray-900">
              fale conosco
            </Link>
          </nav>

          <div className="text-xl font-bold">logo 1</div>
        </div>
      </div>
    </header>
  )
}

