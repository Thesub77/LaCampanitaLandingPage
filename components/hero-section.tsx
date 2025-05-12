import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 md:space-y-6 order-2 md:order-1">
            <div className="inline-block px-3 py-1 bg-amber-200 text-gray-900 rounded-full text-sm">HISTORIA</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Cooperativa Apícola de Mujeres
              <br className="hidden md:block" />
              en Acción <span className="text-amber-600">La Campanita R.L</span>
            </h1>
            <p className="text-gray-900 text-base md:text-lg">
              Somos una cooperativa apícola integrada por 16 mujeres comprometidas con el trabajo colaborativo, el
              empoderamiento femenino y la agroecología. Procesamos miel natural de alta calidad, influenciada por
              flores como café y cítricos, y apostamos a transformar la realidad rural desde la igualdad de género y el
              valor del trabajo digno.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="#productos"
                className="bg-amber-500 text-amber-950 px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-amber-600 transition-colors flex items-center shadow-md text-sm md:text-base"
              >
                Leer Más <span className="ml-2">→</span>
              </Link>
              <Link
                href="#contacto"
                className="border-2 border-amber-500 text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-amber-100 transition-colors text-sm md:text-base"
              >
                Contactar
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2 h-[250px] md:h-[400px] order-1 md:order-2">
            <div className="col-span-8 row-span-2 relative rounded-lg overflow-hidden h-full shadow-lg">
              <Image
                src="/images/PanalDeAbejas.jpg"
                alt="Panal de abejas"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-amber-100 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium text-amber-800">
                Miel Premium
              </div>
            </div>
            <div className="col-span-4 relative rounded-lg overflow-hidden h-full shadow-lg">
              <Image
                src="/images/mujerApicola1.jpg"
                alt="Mujer apicultora"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 relative rounded-lg overflow-hidden h-full shadow-lg">
              <Image
                src="/images/mujerApicola2.jpeg"
                alt="Mujer trabajando con colmenas"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
