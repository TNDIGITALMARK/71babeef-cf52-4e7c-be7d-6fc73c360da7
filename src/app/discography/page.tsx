'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AudioPlayer from '@/components/AudioPlayer'
import { Play, Music, Calendar, Clock } from 'lucide-react'

interface Album {
  id: string
  title: string
  year: number
  type: 'album' | 'ep' | 'single'
  artwork: string
  tracks: {
    title: string
    duration: string
    featured?: string
  }[]
  description: string
  credits?: {
    producer?: string
    recordedAt?: string
    label?: string
  }
}

const discography: Album[] = [
  {
    id: '1',
    title: 'ALMA RANCHERA',
    year: 2024,
    type: 'album',
    artwork: '/album-artwork/alma-ranchera.jpg',
    description: 'A heartfelt tribute to classic Mexican ranchera music with modern arrangements that honor tradition while embracing contemporary production.',
    tracks: [
      { title: 'La Llorona', duration: '4:23' },
      { title: 'Cielito Lindo', duration: '3:45' },
      { title: 'Paloma Negra', duration: '5:12' },
      { title: 'La Malagueña', duration: '4:56' },
      { title: 'Cucurrucucú Paloma', duration: '4:34' },
      { title: 'El Rey', duration: '3:28' },
      { title: 'Volver, Volver', duration: '4:15' },
      { title: 'La Bikina', duration: '3:52' },
      { title: 'Amor Eterno', duration: '5:03' },
      { title: 'México Lindo y Querido', duration: '4:41' }
    ],
    credits: {
      producer: 'Carlos Santamaría',
      recordedAt: 'Abbey Road Studios, Londres',
      label: 'Corazón Music'
    }
  },
  {
    id: '2',
    title: 'CORAZÓN MESTIZO',
    year: 2023,
    type: 'album',
    artwork: '/album-artwork/corazon-mestizo.jpg',
    description: 'Exploring the depth of Mexican romance through timeless boleros and ballads, showcasing the versatility of Mónica\'s vocal range.',
    tracks: [
      { title: 'Bésame Mucho', duration: '4:17' },
      { title: 'Historia de un Amor', duration: '3:58' },
      { title: 'Solamente una Vez', duration: '4:23' },
      { title: 'Perfidia', duration: '3:45' },
      { title: 'Contigo en la Distancia', duration: '4:56' },
      { title: 'Sabor a Mí', duration: '3:34' },
      { title: 'Reloj', duration: '4:12' },
      { title: 'Veracruz', duration: '3:29' }
    ],
    credits: {
      producer: 'María Elena Vázquez',
      recordedAt: 'Estudios Churubusco, México',
      label: 'Corazón Music'
    }
  },
  {
    id: '3',
    title: 'SONES DEL NORTE',
    year: 2023,
    type: 'ep',
    artwork: '/album-artwork/sones-del-norte.jpg',
    description: 'Traditional northern Mexican folk songs celebrating our rich cultural heritage with authentic instrumentation and passionate vocals.',
    tracks: [
      { title: 'El Son de la Negra', duration: '3:42' },
      { title: 'Jarabe Tapatío', duration: '4:15' },
      { title: 'La Adelita', duration: '3:56' },
      { title: 'México Lindo', duration: '4:33' },
      { title: 'Cielito Lindo (Norteño Version)', duration: '3:28' }
    ],
    credits: {
      producer: 'Joaquín Morales',
      recordedAt: 'Estudio Guadalajara',
      label: 'Tradición Records'
    }
  },
  {
    id: '4',
    title: 'PRIMERA VOZ',
    year: 2022,
    type: 'album',
    artwork: '/album-artwork/primera-voz.jpg',
    description: 'Mónica\'s debut album showcasing her incredible vocal range through a mix of traditional and contemporary Mexican music.',
    tracks: [
      { title: 'Amanecer Mexicano', duration: '4:05' },
      { title: 'Corazón Rebelde', duration: '3:47' },
      { title: 'Luna de Octubre', duration: '4:29' },
      { title: 'Tierra Sagrada', duration: '5:12' },
      { title: 'Viento del Sur', duration: '3:55' },
      { title: 'Alma de Fuego', duration: '4:18' },
      { title: 'Canción del Desierto', duration: '4:42' },
      { title: 'Esperanza', duration: '3:38' }
    ],
    credits: {
      producer: 'Roberto Hernández',
      recordedAt: 'Sonic Ranch, Texas',
      label: 'Independent'
    }
  }
]

export default function Discography() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)
  const [currentTrack, setCurrentTrack] = useState<any>(null)

  const playTrack = (album: Album, track: any) => {
    setCurrentTrack({
      title: track.title,
      artist: 'Mónica Denisse',
      album: album.title,
      src: `/audio/${track.title.toLowerCase().replace(/\s+/g, '-')}.mp3`,
      artwork: album.artwork
    })
  }

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'album': return 'ÁLBUM'
      case 'ep': return 'EP'
      case 'single': return 'SENCILLO'
      default: return type.toUpperCase()
    }
  }

  const getTotalDuration = (tracks: any[]) => {
    const totalSeconds = tracks.reduce((acc, track) => {
      const [minutes, seconds] = track.duration.split(':').map(Number)
      return acc + (minutes * 60) + seconds
    }, 0)

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
  }

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
                <span className="text-[hsl(42,88%,75%)]">DISCOGRAPHY</span>
              </h1>
              <p className="text-xl md:text-2xl font-light">
                A Musical Journey Through Mexican Heritage
              </p>
            </div>
          </div>
        </section>

        {/* Discography Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-12">
              {discography.map((album) => (
                <div key={album.id} className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid lg:grid-cols-3 gap-8">

                    {/* Album Artwork & Info */}
                    <div className="lg:col-span-1">
                      <div className="sticky top-8">
                        <div className="aspect-square bg-gradient-to-br from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)] rounded-xl overflow-hidden mb-6 relative group">
                          {/* Placeholder artwork */}
                          <div className="w-full h-full flex items-center justify-center">
                            <Music size={80} className="text-white opacity-30" />
                          </div>

                          {/* Play overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <button
                              onClick={() => album.tracks[0] && playTrack(album, album.tracks[0])}
                              className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                            >
                              <div className="w-16 h-16 bg-[hsl(42,88%,75%)] rounded-full flex items-center justify-center shadow-lg">
                                <Play size={20} className="text-[hsl(220,60%,20%)] ml-1" />
                              </div>
                            </button>
                          </div>
                        </div>

                        <div className="text-center lg:text-left">
                          <div className="inline-block bg-[hsl(220,60%,20%)] text-[hsl(42,88%,75%)] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                            {getTypeLabel(album.type)}
                          </div>
                          <h2 className="text-2xl font-bold text-[hsl(220,60%,20%)] mb-2">
                            {album.title}
                          </h2>
                          <p className="text-gray-600 mb-4 flex items-center justify-center lg:justify-start">
                            <Calendar size={16} className="mr-2" />
                            {album.year}
                          </p>
                          <p className="text-gray-700 mb-6">
                            {album.description}
                          </p>

                          {/* Album Stats */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                            <span className="flex items-center">
                              <Music size={16} className="mr-1" />
                              {album.tracks.length} tracks
                            </span>
                            <span className="flex items-center">
                              <Clock size={16} className="mr-1" />
                              {getTotalDuration(album.tracks)}
                            </span>
                          </div>

                          {/* Credits */}
                          {album.credits && (
                            <div className="text-xs text-gray-500 space-y-1">
                              {album.credits.producer && (
                                <div>Producer: {album.credits.producer}</div>
                              )}
                              {album.credits.recordedAt && (
                                <div>Recorded at: {album.credits.recordedAt}</div>
                              )}
                              {album.credits.label && (
                                <div>Label: {album.credits.label}</div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Track List */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-[hsl(220,60%,20%)] mb-6">
                        Track List
                      </h3>
                      <div className="space-y-2">
                        {album.tracks.map((track, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => playTrack(album, track)}
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(220,60%,20%)] group-hover:text-[hsl(42,88%,75%)] transition-colors">
                                <span className="text-sm font-semibold group-hover:hidden">
                                  {index + 1}
                                </span>
                                <Play size={16} className="hidden group-hover:block ml-0.5" />
                              </div>
                              <div>
                                <h4 className="font-medium text-[hsl(220,60%,20%)] group-hover:text-[hsl(15,75%,55%)] transition-colors">
                                  {track.title}
                                </h4>
                                {track.featured && (
                                  <p className="text-sm text-gray-500">
                                    feat. {track.featured}
                                  </p>
                                )}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {track.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Audio Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t z-50 p-4">
          <div className="max-w-6xl mx-auto">
            <AudioPlayer track={currentTrack} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}