import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(15,75%,55%)] via-[hsl(25,80%,60%)] to-[hsl(35,85%,65%)]" />

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Text Content */}
            <div className="text-white order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
                MÓNICA
                <br />
                <span className="text-[hsl(42,88%,75%)]">DENISSE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 font-light tracking-wider">
                VOZ DE MÉXICO
              </p>
              <p className="text-lg mb-8 opacity-90 max-w-md">
                Celebrating Mexican heritage through powerful vocals and authentic storytelling that touches the soul of our cultura.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[hsl(42,88%,75%)] text-[hsl(220,60%,20%)] px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(42,88%,80%)] transition-colors">
                  LISTEN NOW
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[hsl(15,75%,55%)] transition-colors">
                  TOUR DATES
                </button>
              </div>
            </div>

            {/* Artist Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(42,88%,75%)] to-[hsl(15,75%,55%)] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    {/* Placeholder for artist image */}
                    <div className="w-full h-full bg-gradient-to-br from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)] flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-30">MD</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[hsl(42,88%,75%)]"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[hsl(42,88%,75%)] opacity-60"></div>
                <div className="absolute top-1/4 -left-8 w-6 h-6 rounded-full bg-white opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
        </svg>
      </div>
    </section>
  )
}