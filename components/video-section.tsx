export default function VideoSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <video className="w-full h-full object-cover" controls poster="/">
              <source src="/images/video_landing.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

// controls poster="/placeholder.svg?height=600&width=1000"
