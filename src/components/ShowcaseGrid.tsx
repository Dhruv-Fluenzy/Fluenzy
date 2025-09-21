import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


type VideoType = {
  id: number;
  src: string;
  influencerName: string;
  campaignTitle: string;
  resultStats: string;
  views: number;
  likes: number;
  conversions?: number;
};

const videoData: VideoType[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dv1icpqhw/video/upload/v1695234567/SpaceLines_X_Marketing_LAB_Assignment_2_zenqdc.mp4",
    influencerName: "Alice Smith",
    campaignTitle: "SpaceLines Promo",
    resultStats: "50k views, 4.2% engagement",
    views: 50000,
    likes: 1200,
    conversions: 120,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dv1icpqhw/video/upload/v1758377014/IMG_5033_u9xof5.mp4",
    influencerName: "Bob Johnson",
    campaignTitle: "Tutorial Promo",
    resultStats: "30k views, 3.8% engagement",
    views: 30000,
    likes: 950,
    conversions: 80,
  },
];


const ShowcaseCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [mutedStates, setMutedStates] = useState<boolean[]>(videoData.map(() => true));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const togglePlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const toggleMute = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    video.muted = !video.muted;
    setMutedStates((prev) => {
      const newStates = [...prev];
      newStates[idx] = video.muted;
      return newStates;
    });
  };

  const handleNext = () => setStartIndex((prev) => (prev + 1) % videoData.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + videoData.length) % videoData.length);

  const renderVideoCard = (video: VideoType, idx: number) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const videoEl = videoRefs.current[idx];
      if (!videoEl) return;
      const handleTimeUpdate = () => setProgress((videoEl.currentTime / videoEl.duration) * 100);
      videoEl.addEventListener("timeupdate", handleTimeUpdate);
      return () => videoEl.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);

    return (
      <div key={video.id} className="relative flex-shrink-0 px-2 flex justify-center">
        <div
          className="relative aspect-[9/16] w-full max-w-[360px] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => togglePlay(idx)}
        >
          <video
            ref={(el) => (videoRefs.current[idx] = el)}
            src={video.src}
            muted={mutedStates[idx]}
            loop
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Overlay Info */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all p-4 flex flex-col justify-end opacity-0 hover:opacity-100 text-white">
            <p className="font-bold">{video.influencerName}</p>
            <p className="text-sm">{video.campaignTitle}</p>
            <p className="text-xs">{video.resultStats}</p>
          </div>

          {/* Stats badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 text-xs">
            <span className="bg-white/80 text-black px-1 rounded">{video.views} views</span>
            <span className="bg-white/80 text-black px-1 rounded">{video.likes} likes</span>
            {video.conversions && <span className="bg-white/80 text-black px-1 rounded">{video.conversions} conversions</span>}
          </div>

          {/* Mute button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute(idx);
            }}
            className="absolute top-2 right-2 z-10 bg-black/50 text-white p-1 rounded"
          >
            {mutedStates[idx] ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          {/* Progress bar */}
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => {
              const videoEl = videoRefs.current[idx];
              if (!videoEl) return;
              const newTime = (parseFloat(e.target.value) / 100) * videoEl.duration;
              videoEl.currentTime = newTime;
              setProgress(parseFloat(e.target.value));
            }}
            className="absolute bottom-2 left-2 right-2 h-2 rounded-lg"
            style={{
              appearance: "none",
              background: `linear-gradient(to right, #637AB9 ${progress}%, rgba(255,255,255,0.4) ${progress}%)`,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-noi font-bold text-4xl md:text-6xl  mb-6">
        <span className="text-fluenzy-coral">Our </span>
        <span className="text-fluenzy-black">Work</span>
        </h2>
        <p className="font-inter text-xl text-fluenzy-gray max-w-2xl mx-auto">Content that connects. Fluencers that convert.</p>
      </div>

      {/* Metrics Section */}
      

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-4 max-w-7xl mx-auto overflow-hidden">
        <button onClick={handlePrev} className="absolute left-0 z-10 px-2 py-2 bg-fluenzy-black text-white rounded opacity-80 hover:opacity-100">◀</button>

        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${startIndex * (100 / itemsPerView)}%)` }}>
          {videoData.concat(videoData[0]).map((video, idx) => renderVideoCard(video, idx))}
        </div>

        <button onClick={handleNext} className="absolute right-0 z-10 px-2 py-2 bg-fluenzy-black text-white rounded opacity-80 hover:opacity-100">▶</button>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold mb-4">Book a free consultation today!</p>
        <a href="mailto:brands@fluenzy.in" className="inline-block bg-fluenzy-coral text-white px-6 py-3 rounded hover:bg-fluenzy-black transition-all duration-300">
          Connect Now
        </a>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
