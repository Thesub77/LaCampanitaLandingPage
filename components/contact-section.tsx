import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-gray-50" id="contacto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mb-3 md:mb-4">
            CONTÁCTANOS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            ¡Súmate al cambio desde la raíz!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            ¿Quieres saber más sobre nuestro trabajo y apoyar la agroecología? ¡Escríbenos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Formulario de contacto */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-3 md:space-y-4">
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu nombre"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  placeholder="Asunto del mensaje"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Tu mensaje"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-amber-950 py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-amber-600 transition-colors text-sm md:text-base"
              >
                Enviar Mensaje
              </button>
              <p className="text-center text-gray-600 text-xs md:text-sm mt-2 md:mt-3">
                Valoramos cada consulta. Pronto estaremos en contacto.
              </p>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Información de Contacto</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <MapPin className="text-amber-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">Dirección</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Km 152 Carretera Panamericana, Estelí, Nicaragua</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <Phone className="text-amber-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">Teléfono</h4>
                  <p className="text-gray-600 text-xs md:text-sm">+505 2713 5492</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <Mail className="text-amber-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">Correo Electrónico</h4>
                  <p className="text-gray-600 text-xs md:text-sm">info@lacampanita.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <Clock className="text-amber-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">Horario de Atención</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-xs md:text-sm">Sábados: 8:00 AM - 12:00 PM</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
                  Síguenos en Redes Sociales
                </h4>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <Facebook className="text-amber-600" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <Instagram className="text-amber-600" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <Twitter className="text-amber-600" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
