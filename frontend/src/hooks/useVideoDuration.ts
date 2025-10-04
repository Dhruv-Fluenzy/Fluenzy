import { useState, useEffect } from 'react'

export const useVideoDuration = (videoUrl: string) => {
  const [duration, setDuration] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!videoUrl || videoUrl === '#') {
      setDuration(0)
      setIsLoading(false)
      return
    }

    const video = document.createElement('video')
    video.preload = 'metadata'
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoading(false)
      setError(null)
    }

    const handleError = () => {
      setError('Failed to load video metadata')
      setIsLoading(false)
      setDuration(0)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('error', handleError)

    // Set the video source to trigger metadata loading
    video.src = videoUrl

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('error', handleError)
      video.src = ''
    }
  }, [videoUrl])

  return { duration, isLoading, error }
}

export const formatVideoDuration = (seconds: number): string => {
  if (isNaN(seconds) || seconds === 0) return '0:00'
  
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
