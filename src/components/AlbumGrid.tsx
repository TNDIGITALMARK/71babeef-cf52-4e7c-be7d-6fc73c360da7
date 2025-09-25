'use client'

import { useState } from 'react'
import { Play, Music } from 'lucide-react'

interface Album {
  id: string
  title: string
  year: number
  artwork: string
  tracks: string[]
  description?: string
}

const albums: Album[] = [
  {
    id: '1',
    title: 'ALMA RANCHERA',
    year: 2024,
    artwork: '/album-artwork/alma-ranchera.jpg',
    tracks: ['La Llorona', 'Cielito Lindo', 'Paloma Negra', 'La Malagueña'],
    description: 'A heartfelt tribute to classic Mexican ranchera music with modern arrangements.'
  },
  {
    id: '2',
    title: 'CORAZÓN MESTIZO',
    year: 2023,
    artwork: '/album-artwork/corazon-mestizo.jpg',
    tracks: ['Amor Eterno', 'La Bikina', 'Cucurrucucú Paloma', 'Bésame Mucho'],
    description: 'Exploring the depth of Mexican romance through timeless boleros and ballads.'
  },
  {
    id: '3',
    title: 'SONES DEL NORTE',
    year: 2023,
    artwork: '/album-artwork/sones-del-norte.jpg',
    tracks: ['El Son de la Negra', 'Jarabe Tapatío', 'La Adelita', 'México Lindo'],
    description: 'Traditional northern Mexican folk songs celebrating our rich cultural heritage.'
  }
]

export default function AlbumGrid() {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null)

  const toggleExpanded = (albumId: string) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(220,60%,20%)] mb-4">
            LATEST ALBUM RELEASES
          </h2>
          <div className="w-24 h-1 bg-[hsl(42,88%,75%)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="group">
              {/* Album Card */}
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Album Artwork */}
                <div className="relative aspect-square bg-gradient-to-br from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)]">
                  {/* Placeholder artwork */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music size={80} className="text-white opacity-30" />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-[hsl(42,88%,75%)] rounded-full flex items-center justify-center shadow-lg">
                        <Play size={20} className="text-[hsl(220,60%,20%)] ml-1" />
                      </div>
                    </button>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-[hsl(220,60%,20%)] text-[hsl(42,88%,75%)] px-3 py-1 rounded-full text-sm font-semibold">
                    {album.year}
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(220,60%,20%)] mb-2">
                    {album.title}
                  </h3>

                  {/* Track Count */}
                  <p className="text-gray-600 mb-4">
                    {album.tracks.length} tracks
                  </p>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpanded(album.id)}
                    className="text-[hsl(15,75%,55%)] font-semibold hover:text-[hsl(15,75%,45%)] transition-colors"
                  >
                    {expandedAlbum === album.id ? 'Show Less' : 'Show Details'}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedAlbum === album.id && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    {album.description && (
                      <p className="text-gray-700 mb-4 mt-4">
                        {album.description}
                      </p>
                    )}

                    <div className="mb-4">
                      <h4 className="font-semibold text-[hsl(220,60%,20%)] mb-2">Tracklist:</h4>
                      <ul className="space-y-1">
                        {album.tracks.map((track, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <span className="w-6 text-[hsl(15,75%,55%)] font-semibold">
                              {index + 1}.
                            </span>
                            {track}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-[hsl(220,60%,20%)] text-[hsl(42,88%,75%)] py-2 rounded-lg font-semibold hover:bg-[hsl(220,60%,25%)] transition-colors">
                      Listen to Full Album
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}