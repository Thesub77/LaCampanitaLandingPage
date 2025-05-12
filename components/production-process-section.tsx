import Image from "next/image"

export default function ProductionProcessSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-white" id="proceso">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-amber-200 text-gray-900 rounded-full text-sm mb-3 md:mb-4">
            PROCESO DE PRODUCCIÓN
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-3 md:mb-4">
            Nuestro Aporte en la Cadena de Producción
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-sm md:text-base">
            Conoce el cuidadoso proceso que seguimos para extraer y preparar la miel de la más alta calidad, desde
            nuestras colmenas hasta su destino final.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {/* Paso 1 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-200 text-amber-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-3">Cuidado de las Colmenas</h3>
              <p className="text-gray-900 text-sm md:text-base">
                Nuestras mujeres apicultoras mantienen y cuidan las colmenas con técnicas tradicionales y sostenibles,
                asegurando el bienestar de las abejas y la calidad de la miel. Realizamos revisiones periódicas para
                garantizar la salud de la colonia y la producción óptima.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-amber-100 rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
              <Image
                src="/images/cuidadoDeColmenas.jpg"
                alt="Cuidado de colmenas"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Paso 2 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="bg-amber-100 rounded-lg overflow-hidden h-48 md:h-64 shadow-md order-1">
              <Image
                src="/images/recoleccionDeMiel.jpg"
                alt="Recolección de miel"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-200 text-amber-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-3">Recolección de la Miel</h3>
              <p className="text-gray-900 text-sm md:text-base">
                Cuando los panales están llenos, nuestras apicultoras recolectan cuidadosamente los marcos con miel,
                asegurándose de dejar suficiente para las abejas. Este proceso se realiza con el equipo de protección
                adecuado y respetando los ciclos naturales de las abejas.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-200 text-amber-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-3">Extracción y Filtrado</h3>
              <p className="text-gray-900 text-sm md:text-base">
                En nuestras instalaciones, extraemos la miel de los panales mediante un proceso mecánico que preserva
                todas sus propiedades naturales. Posteriormente, la miel se filtra cuidadosamente para eliminar
                impurezas, manteniendo intactos sus nutrientes y propiedades medicinales.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-amber-100 rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
              <Image
                src="/images/extraccionYfiltradoDeLaMiel.jpg"
                alt="Extracción y filtrado"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Paso 4 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="bg-amber-100 rounded-lg overflow-hidden h-48 md:h-64 shadow-md order-1">
              <Image
                src="/images/controlDeCalidadDeLaMiel.png"
                alt="Control de calidad"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-200 text-amber-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                4
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-3">Control de Calidad</h3>
              <p className="text-gray-900 text-sm md:text-base">
                Cada lote de miel pasa por rigurosos controles de calidad donde verificamos su pureza, consistencia y
                propiedades organolépticas. Nuestras mujeres expertas evalúan cada muestra para garantizar que solo la
                miel de la más alta calidad continúe en el proceso.
              </p>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-200 text-amber-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                5
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-3">Envío a Las Diosas R.L</h3>
              <p className="text-gray-900 text-sm md:text-base">
                La miel preparada y verificada es enviada a nuestra sede central Las Diosas R.L, donde se utiliza como
                materia prima para la elaboración de productos cosméticos naturales. Este paso final conecta nuestro
                trabajo con la cadena de valor más amplia, contribuyendo al desarrollo económico de nuestra comunidad.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-amber-100 rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
              <Image
                src="/images/envioDeLaMiel.jpeg"
                alt="Envío a sede central"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
