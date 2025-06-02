"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon, PlayIcon, PauseIcon, EyeIcon, SpeakerWaveIcon, SpeakerXMarkIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7 } from "./components";

// Slide components array
const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];
const totalSlides = slideComponents.length;

// Slide titles for preview functionality
const slideTitles = [
  { title: "Python for Data Science", subtitle: "A Journey Through Programming Excellence", points: 4 },
  { title: "What is Python?", subtitle: "Introduction to the versatile programming language", points: 4 },
  { title: "The Early Days", subtitle: "Python's development journey from 1989-1994", points: 3 },
  { title: "Growing Into Industry", subtitle: "Python's evolution and adoption in various sectors", points: 4 },
  { title: "Python Philosophy", subtitle: "The Zen of Python and core principles", points: 2 },
  { title: "Python Versions Evolution", subtitle: "From Python 1.0 to current usage statistics", points: 6 },
  { title: "Thank You", subtitle: "Questions and discussion", points: 3 },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTransitionFlash, setShowTransitionFlash] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState(8000); // 8 seconds default
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sound effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.3;
    }
  }, []);

  const playSound = (type: "next" | "prev" | "start" | "end") => {
    if (!soundEnabled || !audioRef.current) return;

    // Create different frequency sounds for different actions
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    switch (type) {
      case "next":
        oscillator.frequency.setValueAtTime(800, context.currentTime);
        break;
      case "prev":
        oscillator.frequency.setValueAtTime(400, context.currentTime);
        break;
      case "start":
        oscillator.frequency.setValueAtTime(1200, context.currentTime);
        break;
      case "end":
        oscillator.frequency.setValueAtTime(200, context.currentTime);
        break;
    }

    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.3);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      setTimeRemaining(autoPlayInterval / 1000);
      const countdownTimer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            return autoPlayInterval / 1000;
          }
          return prev - 1;
        });
      }, 1000);
      autoPlayRef.current = setTimeout(() => {
        if (currentSlide < totalSlides - 1) {
          nextSlide();
        } else {
          setIsAutoPlay(false);
          playSound("end");
        }
      }, autoPlayInterval);

      return () => {
        clearTimeout(autoPlayRef.current!);
        clearInterval(countdownTimer);
      };
    }
  }, [isAutoPlay, currentSlide, autoPlayInterval]);

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (!isAutoPlay) {
      playSound("start");
    }
  };
  const nextSlide = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      setIsAutoPlay(false);
    }
    setShowTransitionFlash(true);
    setTimeout(() => setShowTransitionFlash(false), 300);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    playSound("next");
  };

  const prevSlide = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      setIsAutoPlay(false);
    }
    setShowTransitionFlash(true);
    setTimeout(() => setShowTransitionFlash(false), 300);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    playSound("prev");
  };

  const goToSlide = (index: number) => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      setIsAutoPlay(false);
    }
    setShowTransitionFlash(true);
    setTimeout(() => setShowTransitionFlash(false), 300);
    setCurrentSlide(index);
    playSound(index > currentSlide ? "next" : "prev");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  // Handle keyboard navigation
  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
      case " ":
      case "PageDown":
        e.preventDefault();
        nextSlide();
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prevSlide();
        break;
      case "f":
      case "F":
        e.preventDefault();
        toggleFullscreen();
        break;
      case "Home":
        e.preventDefault();
        goToSlide(0);
        break;
      case "End":
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case "Escape":
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
        setShowPreview(false);
        break;
      case "p":
      case "P":
        e.preventDefault();
        setShowPreview(!showPreview);
        break;
      case "s":
      case "S":
        e.preventDefault();
        setSoundEnabled(!soundEnabled);
        break;
      case "a":
      case "A":
        e.preventDefault();
        toggleAutoPlay();
        break;
      default:
        // Check for number keys (1-9) to jump to specific slides
        if (e.key >= "1" && e.key <= "9") {
          const slideNumber = parseInt(e.key) - 1;
          if (slideNumber < totalSlides) {
            e.preventDefault();
            goToSlide(slideNumber);
          }
        }
        break;
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950" onKeyDown={handleKeyPress} tabIndex={0}>
      {/* Modern Background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            style={{ top: "10%", left: "10%" }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
            style={{ top: "50%", right: "10%" }}
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
            style={{ bottom: "20%", left: "30%" }}
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      {/* Left Vertical Controls Bar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-1/2 left-4 transform -translate-y-1/2 z-30 p-3 bg-slate-800/90 backdrop-blur-lg border border-slate-700/60 rounded-xl shadow-2xl flex flex-col items-center space-y-3"
      >
        {/* Slide counter & Auto-play timer */}
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-slate-700/70 px-3 py-1.5 rounded-lg shadow-md">
            <span className="text-slate-200 text-xs font-medium tracking-wider">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
          {isAutoPlay && (
            <div className="bg-slate-700/70 px-3 py-1.5 rounded-lg shadow-md">
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-200 text-xs font-medium">{timeRemaining}s</span>
              </div>
            </div>
          )}
        </div>
        <div className="h-px w-full bg-slate-700/50 my-1"></div> {/* Separator */}
        {/* Home button */}
        <button
          onClick={() => goToSlide(0)}
          disabled={currentSlide === 0}
          className="p-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed group"
          title="Go to First Slide (Home)"
        >
          <HomeIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
        </button>
        {/* Previous button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed group"
          title="Previous Slide (ArrowLeft)"
        >
          <ChevronLeftIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
        </button>
        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2.5 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed group"
          title="Next Slide (ArrowRight)"
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>
        {/* Progress Bar Vertical */}
        <div className="h-20 w-1.5 bg-slate-700/50 rounded-full overflow-hidden my-1 shadow-inner">
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
            initial={{ height: "0%" }}
            animate={{ height: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        {/* Sound button */}
        <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 group" title={soundEnabled ? "Mute Sound (S)" : "Unmute Sound (S)"}>
          {soundEnabled ? <SpeakerWaveIcon className="w-5 h-5 text-slate-300 group-hover:text-white" /> : <SpeakerXMarkIcon className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />}
        </button>
        {/* AutoPlay button */}
        <button onClick={toggleAutoPlay} className="p-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 group" title={isAutoPlay ? "Pause Autoplay (A)" : "Start Autoplay (A)"}>
          {isAutoPlay ? <PauseIcon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" /> : <PlayIcon className="w-5 h-5 text-green-400 group-hover:text-green-300" />}
        </button>
        {/* Fullscreen button */}
        <button onClick={toggleFullscreen} className="p-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 group" title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}>
          <ArrowsPointingOutIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
        </button>
      </motion.div>
      {/* Transition Flash Effect */}
      <AnimatePresence>
        {showTransitionFlash && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 z-20" />
        )}
      </AnimatePresence>{" "}
      {/* Main Slide Container */}
      <div className="h-screen flex items-center justify-center relative pl-24">
        <AnimatePresence mode="wait">
          {(() => {
            const SlideComponent = slideComponents[currentSlide];
            return <SlideComponent key={currentSlide} slideNumber={currentSlide + 1} totalSlides={totalSlides} />;
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}
