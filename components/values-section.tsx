import { UsersRound, RatioIcon as Balance, Leaf, HeartHandshake } from "lucide-react"

export default function ValuesSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-amber-200 text-gray-900 rounded-full text-sm mb-3 md:mb-4">
            PRINCIPIOS FUNDAMENTALES
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-3 md:mb-4">Nuestros Valores</h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-sm md:text-base">
            Estos son los valores que guían nuestro trabajo diario y nos ayudan a construir una cooperativa más fuerte y
            comprometida con nuestra comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {/* Valor 1: Empoderamiento colectivo */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-amber-100 flex flex-col items-center text-center hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
              <UsersRound className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2 md:mb-3">Empoderamiento colectivo</h3>
            <p className="text-gray-900 text-sm md:text-base">
              Creemos en la fuerza de las mujeres unidas para transformar su realidad, construir autonomía económica y
              liderar procesos de cambio en sus comunidades.
            </p>
          </div>

          {/* Valor 2: Igualdad de género */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-amber-100 flex flex-col items-center text-center hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Balance className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2 md:mb-3">Igualdad de género</h3>
            <p className="text-gray-900 text-sm md:text-base">
              Nuestra cooperativa nació como una respuesta al machismo estructural. Promovemos la equidad en todos los
              espacios y apostamos por un futuro donde mujeres y hombres compartan oportunidades.
            </p>
          </div>

          {/* Valor 3: Compromiso con el entorno */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-amber-100 flex flex-col items-center text-center hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Leaf className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2 md:mb-3">Compromiso con el entorno</h3>
            <p className="text-gray-900 text-sm md:text-base">
              Cuidamos el territorio donde vivimos, trabajamos de forma respetuosa con las abejas y valoramos los ciclos
              naturales que hacen posible nuestra producción.
            </p>
          </div>

          {/* Valor 4: Solidaridad y trabajo en comunidad */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-amber-100 flex flex-col items-center text-center hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
              <HeartHandshake className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2 md:mb-3">
              Solidaridad y trabajo en comunidad
            </h3>
            <p className="text-gray-900 text-sm md:text-base">
              Fomentamos relaciones basadas en el respeto, la ayuda mutua y el aprendizaje colectivo, fortaleciendo
              nuestros lazos como grupo y como parte de una red mayor de mujeres rurales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
