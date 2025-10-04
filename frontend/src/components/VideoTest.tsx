import React, { useState } from 'react'

const VideoTest: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('https://res.cloudinary.com/dv1icpqhw/video/upload/v1758377014/IMG_5033_u9xof5.mp4')
  const [testResults, setTestResults] = useState<{ [key: string]: string }>({})

  const testUrls = [
    'https://res.cloudinary.com/dv1icpqhw/video/upload/v1758377014/IMG_5033_u9xof5.mp4',
    'https://res.cloudinary.com/dq59vhg6j/video/upload/v1734879951/VIRALVIDS_mvxcxk.mp4',
    'https://res.cloudinary.com/dq59vhg6j/video/upload/v1734879941/video_2024-12-22_18-15-18_vgfgdp.mp4'
  ]

  const testVideoUrl = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      if (response.ok) {
        setTestResults(prev => ({ ...prev, [url]: `✅ Accessible (${response.status})` }))
      } else {
        setTestResults(prev => ({ ...prev, [url]: `❌ Error ${response.status}` }))
      }
    } catch (error) {
      setTestResults(prev => ({ ...prev, [url]: `❌ Network Error: ${error}` }))
    }
  }

  const testAllUrls = () => {
    testUrls.forEach(url => testVideoUrl(url))
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cloudinary Video URL Test</h2>
      
      {/* URL Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Test Video URL:</label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Cloudinary video URL"
        />
        <button
          onClick={() => testVideoUrl(videoUrl)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Test This URL
        </button>
      </div>

      {/* Batch Test */}
      <div className="mb-6">
        <button
          onClick={testAllUrls}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Test All Known URLs
        </button>
      </div>

      {/* Test Results */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Test Results:</h3>
        <div className="space-y-2">
          {Object.entries(testResults).map(([url, result]) => (
            <div key={url} className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 break-all">{url}</div>
              <div className="font-medium">{result}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Test */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Video Player Test:</h3>
        <video
          src={videoUrl}
          controls
          className="w-full max-w-2xl h-auto bg-black rounded-lg"
          onLoadStart={() => console.log('Video load started')}
          onLoadedData={() => console.log('Video data loaded')}
          onError={(e) => console.error('Video error:', e.currentTarget.error)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Debugging Info */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Common Cloudinary Issues:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>Cloud Name Mismatch:</strong> Make sure you're using the correct cloud name in your URLs</li>
          <li><strong>Resource Access:</strong> Check if your Cloudinary resources are set to public</li>
          <li><strong>CORS Settings:</strong> Cloudinary might need CORS configuration for web playback</li>
          <li><strong>Resource Type:</strong> Ensure the resource is uploaded as 'video' type</li>
          <li><strong>URL Format:</strong> Standard format: https://res.cloudinary.com/[cloud-name]/video/upload/[transformations]/[public-id].[extension]</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoTest
