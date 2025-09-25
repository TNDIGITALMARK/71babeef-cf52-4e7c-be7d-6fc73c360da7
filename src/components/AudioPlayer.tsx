'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

interface AudioPlayerProps {
  track: {
    title: string
    artist: string
    album: string
    src: string
    artwork?: string
  }
}

export default function AudioPlayer({ track }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = (parseFloat(e.target.value) / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = parseFloat(e.target.value) / 100
    setVolume(newVolume)
    audio.volume = newVolume
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <audio ref={audioRef} src={track.src} />

      {/* Album Art & Info */}
      <div className="flex items-center mb-4">
        {track.artwork && (
          <img
            src={track.artwork}
            alt={`${track.album} artwork`}
            className="w-16 h-16 rounded-lg object-cover mr-4"
          />
        )}
        <div>
          <h3 className="font-semibold text-[hsl(220,60%,20%)]">{track.title}</h3>
          <p className="text-sm text-gray-600">{track.artist}</p>
          <p className="text-xs text-gray-500">{track.album}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={progressPercentage}
          onChange={handleProgressChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <SkipBack size={20} className="text-[hsl(220,60%,20%)]" />
        </button>

        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-[hsl(220,60%,20%)] hover:bg-[hsl(220,60%,25%)] transition-colors"
        >
          {isPlaying ? (
            <Pause size={24} className="text-[hsl(42,88%,75%)]" />
          ) : (
            <Play size={24} className="text-[hsl(42,88%,75%)] ml-1" />
          )}
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <SkipForward size={20} className="text-[hsl(220,60%,20%)]" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2">
        <Volume2 size={16} className="text-gray-600" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume * 100}
          onChange={handleVolumeChange}
          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(42, 88%, 75%);
          cursor: pointer;
          border: 2px solid hsl(220, 60%, 20%);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(42, 88%, 75%);
          cursor: pointer;
          border: 2px solid hsl(220, 60%, 20%);
        }
      `}</style>
    </div>
  )
}