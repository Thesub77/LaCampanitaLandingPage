import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Columna 1: Logo e información */}
          <div className="space-y-3 md:space-y-4">
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
              <span className="text-white font-medium text-base md:text-lg">La Campanita R.L</span>
            </Link>
            <p className="text-xs md:text-sm text-gray-400">
              Cooperativa apícola de mujeres Chorotegas dedicadas a la producción sostenible de miel y derivados.
              Transformando vidas y comunidades a través del trabajo colaborativo y el empoderamiento femenino.
            </p>
            <p className="text-xs text-gray-500">© 2025 La Campanita R.L. Todos los derechos reservados.</p>
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-base md:text-lg">Productos</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Miel Pura
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Productos Cosméticos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Productos Orgánicos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Productos Especiales
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-base md:text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="#proceso" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Nuestro Proceso
                </Link>
              </li>
              <li>
                <Link href="#certificaciones" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white text-xs md:text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Boletín Informativo */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-base md:text-lg">Boletín Informativo</h3>
            <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
              Suscríbete para recibir noticias sobre nuestros productos, ofertas especiales y eventos.
            </p>
            <form className="space-y-2 md:space-y-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-3 md:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs md:text-sm"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 text-amber-950 py-2 px-3 md:px-4 rounded-md hover:bg-amber-400 transition-colors text-xs md:text-sm"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-500 flex items-center mb-3 md:mb-0 text-center md:text-left">
            Diseñado y desarrollado con <Heart className="text-red-500 mx-1" size={14} fill="currentColor" /> para las
            apicultoras de La Campanita
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:space-x-6">
            <Link href="#" className="text-xs md:text-sm text-gray-500 hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-xs md:text-sm text-gray-500 hover:text-white">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-xs md:text-sm text-gray-500 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
