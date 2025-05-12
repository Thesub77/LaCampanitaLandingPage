import { Award, ShoppingBag, Leaf } from "lucide-react"

export default function CertificationsSection() {
  return (
    <section className="w-full py-16 bg-white" id="certificaciones">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mb-4">
            GARANTÍA DE CALIDAD
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Certificaciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestros productos cuentan con certificaciones que garantizan su calidad, sostenibilidad y responsabilidad
            social.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Certificación 1 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Award className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Certificación Orgánica</h3>
            <p className="text-gray-600 text-sm text-center">
              Nuestros productos orgánicos están certificados por organismos internacionales que garantizan que han sido
              cultivados sin el uso de pesticidas ni fertilizantes químicos.
            </p>
          </div>

          {/* Certificación 2 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Comercio Justo</h3>
            <p className="text-gray-600 text-sm text-center">
              Trabajamos bajo los principios del comercio justo, asegurando precios justos para nuestros agricultores y
              condiciones laborales dignas.
            </p>
          </div>

          {/* Certificación 3 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Leaf className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Rainforest Alliance</h3>
            <p className="text-gray-600 text-sm text-center">
              Nuestro café cuenta con la certificación Rainforest Alliance, que promueve la conservación de la
              biodiversidad y los medios de vida sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
