import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 bg-green-800 text-white" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-green-700 text-white rounded-full text-sm mb-4">TESTIMONIOS</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Descubre por qué nuestra miel y productos derivados son apreciados por clientes de todo el mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonio 1 */}
          <div className="bg-green-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="María González"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">María González</h4>
                <p className="text-green-200 text-sm">Dueña de Tienda Natural, Madrid</p>
              </div>
            </div>
            <p className="text-green-100 text-sm mb-4">
              "La miel de La Campanita ha transformado mi negocio. Mis clientes notan la diferencia y siempre preguntan
              de dónde viene esta miel tan especial. La calidad y pureza son excepcionales, y me encanta apoyar a una
              cooperativa de mujeres."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-green-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Carlos Martínez"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Carlos Martínez</h4>
                <p className="text-green-200 text-sm">Chef, Restaurante Raíces</p>
              </div>
            </div>
            <p className="text-green-100 text-sm mb-4">
              "Los productos derivados de la miel de La Campanita son incomparables en calidad y sabor. He incorporado
              su miel en varios de mis postres y el feedback de mis clientes ha sido extraordinario. Además, me encanta
              apoyar a productoras que trabajan de manera sostenible."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-green-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Ana Rodríguez"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Ana Rodríguez</h4>
                <p className="text-green-200 text-sm">Importadora, Sabores del Mundo</p>
              </div>
            </div>
            <p className="text-green-100 text-sm mb-4">
              "Llevo años importando miel de La Campanita y la calidad siempre es consistente. Mis clientes en Europa
              aprecian el sabor auténtico, las propiedades medicinales y la historia detrás de cada producto. Una miel
              verdaderamente especial."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
