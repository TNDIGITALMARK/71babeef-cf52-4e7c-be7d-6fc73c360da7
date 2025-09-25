import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Music, Award, Heart, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-white text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                ABOUT <span className="text-[hsl(42,88%,75%)]">MÓNICA</span>
              </h1>
              <p className="text-xl md:text-2xl font-light">
                The Voice That Celebrates Mexican Heritage
              </p>
            </div>
          </div>
        </section>

        {/* Artist Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[hsl(220,60%,20%)] mb-6">
                  A Voice Born from Tradition
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Mónica Denisse discovered her passion for music at the age of seven,
                    listening to her grandmother's collection of classic Mexican rancheras.
                    Growing up in Guadalajara, Jalisco, she was surrounded by the rich
                    musical traditions that would later shape her unique artistic voice.
                  </p>
                  <p>
                    Her journey began in local festivals and community celebrations,
                    where her powerful voice and emotional delivery quickly gained
                    recognition. What sets Mónica apart is her ability to honor
                    traditional Mexican music while bringing fresh, contemporary
                    interpretations that resonate with modern audiences.
                  </p>
                  <p>
                    Today, Mónica Denisse is recognized as one of Mexico's most
                    promising voices, carrying forward the legacy of great Mexican
                    singers while creating her own path in the music industry.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)] rounded-xl overflow-hidden">
                  {/* Placeholder for artist photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-30">MD</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[hsl(42,88%,75%)] rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[hsl(42,88%,75%)] rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(220,60%,20%)] mb-4">
                ACHIEVEMENTS & RECOGNITION
              </h2>
              <div className="w-24 h-1 bg-[hsl(42,88%,75%)] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[hsl(42,88%,75%)]" size={32} />
                </div>
                <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">3 Latin Music Awards</h3>
                <p className="text-gray-600 text-sm">Recognition for outstanding vocal performance and cultural contribution</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="text-[hsl(42,88%,75%)]" size={32} />
                </div>
                <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">5 Studio Albums</h3>
                <p className="text-gray-600 text-sm">Each album celebrating different aspects of Mexican musical heritage</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[hsl(42,88%,75%)]" size={32} />
                </div>
                <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">500K+ Followers</h3>
                <p className="text-gray-600 text-sm">Growing global community of Mexican music enthusiasts</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[hsl(42,88%,75%)]" size={32} />
                </div>
                <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">Cultural Ambassador</h3>
                <p className="text-gray-600 text-sm">Promoting Mexican culture through international performances</p>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Philosophy */}
        <section className="py-16 bg-[hsl(220,60%,20%)] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(42,88%,75%)] mb-8">
              MY MUSICAL PHILOSOPHY
            </h2>

            <blockquote className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
              "Music is the bridge between generations. Through my voice, I carry
              the stories of my ancestors while speaking to the hearts of today's
              listeners. Every song is a celebration of who we are as Mexicans —
              our struggles, our joys, our unbreakable spirit."
            </blockquote>

            <div className="w-24 h-1 bg-[hsl(42,88%,75%)] mx-auto mb-8"></div>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Mónica believes that authentic music comes from the heart and speaks to the soul.
              Her mission is to preserve the beauty of traditional Mexican music while making
              it accessible and relevant to new generations around the world.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[hsl(220,60%,20%)] mb-4">
              LET'S CONNECT
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in booking performances, collaborations,
              or just want to share your love for Mexican music, I'd love to hear from you.
            </p>
            <button className="bg-[hsl(42,88%,75%)] text-[hsl(220,60%,20%)] px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(42,88%,80%)] transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}