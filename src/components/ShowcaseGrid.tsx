import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const videoData = [
  { id: 1, src: "https://res.cloudinary.com/dv1icpqhw/video/upload/v1695234567/SpaceLines_X_Marketing_LAB_Assignment_2_zenqdc.mp4" },
  { id: 2, src: "https://res.cloudinary.com/dv1icpqhw/video/upload/v1758377014/IMG_5033_u9xof5.mp4" },
];

const ShowcaseCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // dynamic per screen
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState<boolean[]>(videoData.map(() => true));

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1); // mobile
      else if (window.innerWidth < 1024) setItemsPerView(2); // tablet
      else setItemsPerView(2); // desktop
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

  const renderVideo = (video: typeof videoData[0], idx: number) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const videoEl = videoRefs.current[idx];
      if (!videoEl) return;
      const handleTimeUpdate = () =>
        setProgress((videoEl.currentTime / videoEl.duration) * 100);
      videoEl.addEventListener("timeupdate", handleTimeUpdate);
      return () => videoEl.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);

    return (
      <div key={video.id} className="video-wrapper relative">
        <div
          className="relative w-full aspect-[9/16] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => togglePlay(idx)}
        >
          <video
            ref={(el) => (videoRefs.current[idx] = el)}
            src={video.src}
            muted={mutedStates[idx]}
            loop
            className="w-full h-full object-cover"
          />

          {/* Mute/Unmute Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute(idx);
            }}
            className="absolute top-2 right-2 z-10 bg-black/50 text-white p-1 rounded"
          >
            {mutedStates[idx] ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          {/* Progress Bar */}
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => {
              const videoEl = videoRefs.current[idx];
              if (!videoEl) return;
              const newTime =
                (parseFloat(e.target.value) / 100) * videoEl.duration;
              videoEl.currentTime = newTime;
              setProgress(parseFloat(e.target.value));
            }}
            className="absolute bottom-2 left-2 right-2 h-2 rounded-lg"
            style={{
              appearance: "none",
              background: `linear-gradient(to right, var(--main-blue) ${progress}%, rgba(255,255,255,0.4) ${progress}%)`,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-6">
          Our Work
        </h2>
        <p className="font-inter text-xl text-fluenzy-gray max-w-2xl mx-auto">
          Content that connects. Fluencers that convert.
        </p>
      </div>

      <div className="relative flex items-center justify-center gap-4 max-w-7xl mx-auto overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 px-2 py-2 bg-fluenzy-black text-white rounded opacity-80 hover:opacity-100"
        >
          ◀
        </button>

        {/* Video slider */}
        <div
  className="flex transition-transform duration-500"
  style={{
    transform: `translateX(-${startIndex * (100 / itemsPerView)}%)`,
  }}
>
  {videoData.concat(videoData[0]).map((video, idx) => (
    <div
      key={idx}
      className="flex-shrink-0 px-2 flex justify-center"
      style={{ width: `${100 / itemsPerView}%` }}
    >
      <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] rounded-lg overflow-hidden">
        {renderVideo(video, idx)}
      </div>
    </div>
  ))}
</div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 px-2 py-2 bg-fluenzy-black text-white rounded opacity-80 hover:opacity-100"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
