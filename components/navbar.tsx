import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
            <Image
              src="/images/LogoLaCampanita.png"
              alt="Logo La Campanita R.L"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-amber-900 font-medium text-base md:text-lg">La Campanita R.L</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#proceso" className="text-gray-700 hover:text-amber-600">
            Proceso
          </Link>
          <Link href="#certificaciones" className="text-gray-700 hover:text-amber-600">
            Certificaciones
          </Link>
          <Link href="#testimonios" className="text-gray-700 hover:text-amber-600">
            Testimonios
          </Link>
          <Link
            href="#contacto"
            className="bg-amber-500 text-amber-950 px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
