"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-black">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <Star className="w-1 h-1 text-white opacity-60" />
          </div>
        ))}
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* SpaceX Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-3">
            <Rocket className="w-12 h-12 text-white" />
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-wider">
              SPACE<span className="text-blue-400">X</span>
            </h1>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          MAKING HUMANITY
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MULTIPLANETARY
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          SpaceX designs, manufactures and launches advanced rockets and spacecraft. 
          The company was founded in 2002 to revolutionize space technology, 
          with the ultimate goal of enabling people to live on other planets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-none font-semibold transition-all duration-300 transform hover:scale-105"
          >
            WATCH LAUNCH
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-none font-semibold transition-all duration-300 transform hover:scale-105"
          >
            LEARN MORE
          </Button>
        </div>

        {/* Mission stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400 uppercase tracking-wide">Total Launches</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">160+</div>
            <div className="text-gray-400 uppercase tracking-wide">Landings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">140+</div>
            <div className="text-gray-400 uppercase tracking-wide">Reflights</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white mx-auto opacity-70" />
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}