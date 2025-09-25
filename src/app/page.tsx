import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AlbumGrid from '@/components/AlbumGrid'
import UpcomingShows from '@/components/UpcomingShows'
import AudioPlayer from '@/components/AudioPlayer'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

const featuredTrack = {
  title: 'La Malagueña',
  artist: 'Mónica Denisse',
  album: 'Alma Ranchera',
  src: '/audio/la-malaguena.mp3', // placeholder
  artwork: '/album-artwork/alma-ranchera.jpg'
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AlbumGrid />

        {/* Featured Music Section */}
        <section className="py-16 bg-gradient-to-r from-[hsl(220,60%,20%)] to-[hsl(220,60%,15%)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(42,88%,75%)] mb-4">
                FEATURED MUSIC
              </h2>
              <div className="w-24 h-1 bg-[hsl(42,88%,75%)] mx-auto mb-4"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Listen to the latest single from Mónica Denisse
              </p>
            </div>

            <div className="flex justify-center">
              <AudioPlayer track={featuredTrack} />
            </div>
          </div>
        </section>

        <UpcomingShows />
      </main>
      <Footer />
    </div>
  );
}