import { useState, useEffect, useRef } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { MagicCard } from "@/Components/magicui/magic-card";
import { BorderBeam } from "@/Components/magicui/border-beam";

function MeditationPage({
  title,
  description,
  imageFile,
  musicFile,
  duration,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [musicUrl, setMusicUrl] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data: imageData, error: imageError } = supabase.storage
          .from("assets")
          .getPublicUrl(imageFile);
        if (imageError) console.error("Image URL Error:", imageError);
        if (imageData) setImageUrl(imageData.publicUrl);

        const { data: audioData, error: audioError } = supabase.storage
          .from("assets")
          .getPublicUrl(musicFile);
        if (audioError) console.error("Audio URL Error:", audioError);
        if (audioData) {
          setMusicUrl(audioData.publicUrl); // ✅ Save music URL
        }
      } catch (err) {
        console.error("Error fetching media:", err);
      }
    };

    fetchMedia();
  }, [imageFile, musicFile]);

  useEffect(() => {
    if (musicUrl) {
      const newAudio = new Audio(musicUrl);
      setAudio(newAudio);

      // Cleanup function to stop audio when unmounting
      return () => {
        newAudio.pause();
        newAudio.currentTime = 0; // Reset audio position
      };
    }
  }, [musicUrl]);

  useEffect(() => {
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [audio, isDragging]);

  const playPauseAudio = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  };

  // 🎯 Drag-to-Seek Logic
  const handleDragStart = (e) => {
    setIsDragging(true);
    updateProgressBar(e);

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      updateProgressBar(e);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
  };

  const updateProgressBar = (e) => {
    if (!progressBarRef.current || !audio) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(
      Math.max((offsetX / rect.width) * 100, 0),
      100
    );

    setProgress(newProgress);
    audio.currentTime = (newProgress / 100) * audio.duration;
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="relative bg-[ #301C3B] min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      />

      <div
        className="relative z-10 text-center text-white px-10 py-8 bg-opacity-70 rounded-lg max-w-lg w-full"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        <BorderBeam
          duration={10}
          size={450}
          className="from-transparent via-red-300 to-transparent"
        />

        <BorderBeam
          duration={10}
          delay={5}
          size={450}
          className="from-transparent via-blue-300 to-transparent"
        />

        <h1 className="text-5xl text-[#F3F3B7] font-semibold mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-6">{description}</p>

        <div className="mb-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              onClick={playPauseAudio}
              className="btn btn-circle bg-gradient-to-r from-[#301C3B] via-indigo-500 to-[#301C3B] text-white font-semibold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 ease-in-out 
      
      hover:scale-110 hover:shadow-xl hover:from-purple-950 hover:via-[#dc7373] hover:to-purple-950 hover:bg-opacity-90
      
      focus:outline-none focus:ring-[4px] focus:ring-transparent focus:relative focus:before:content-[''] focus:before:absolute focus:before:inset-0 focus:before:rounded-full focus:before:border-2 focus:before:border-transparent focus:before:animate-neon-border

      active:scale-95 active:bg-cyan-300"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {/* 🎵 Draggable Progress Bar */}
          <div
            ref={progressBarRef}
            className="w-full bg-gray-300 rounded-full h-2 relative cursor-pointer"
            onMouseDown={handleDragStart}
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-indigo-500 rounded-full transition-all duration-150"
            />
            {/* 🎯 Draggable Handle */}
            <div
              style={{ left: `${progress}%` }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-700 rounded-full cursor-grab active:cursor-grabbing"
            />
          </div>

          <p className="mt-2 text-lg font-semibold">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeditationPage;
