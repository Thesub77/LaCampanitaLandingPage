export default function MissionVisionSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-amber-50 rounded-lg p-8 shadow-md border border-amber-200 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="inline-block px-3 py-1 bg-amber-200 text-gray-900 rounded-full text-sm mb-4">
              NUESTRA MISIÓN
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Lo que nos impulsa cada día</h2>
            <p className="text-gray-900 leading-relaxed">
              Empoderar a mujeres rurales mediante la producción y procesamiento artesanal de miel, fortaleciendo la
              economía local, la equidad de género y la agroecología, en un entorno de colaboración, aprendizaje y
              compromiso comunitario.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-amber-50 rounded-lg p-8 shadow-md border border-amber-200 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="inline-block px-3 py-1 bg-amber-200 text-gray-900 rounded-full text-sm mb-4">
              NUESTRA VISIÓN
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Hacia dónde vamos</h2>
            <p className="text-gray-900 leading-relaxed">
              Ser una cooperativa apícola referente en prácticas sostenibles y transformación social, reconocida por su
              liderazgo femenino, su compromiso con la biodiversidad y su impacto positivo en la calidad de vida de las
              comunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
