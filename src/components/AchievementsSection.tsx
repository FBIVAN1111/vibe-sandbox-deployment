"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const achievements = [
  {
    year: "2002",
    title: "SpaceX Founded",
    description: "Elon Musk founded SpaceX with the goal of reducing space transportation costs and enabling Mars colonization.",
    category: "Foundation"
  },
  {
    year: "2008",
    title: "First Private Liquid-Fueled Rocket",
    description: "Falcon 1 becomes the first privately developed liquid-fueled rocket to reach orbit.",
    category: "Milestone"
  },
  {
    year: "2012",
    title: "First Commercial Crew Mission",
    description: "Dragon becomes the first commercial spacecraft to deliver cargo to the International Space Station.",
    category: "Commercial"
  },
  {
    year: "2015",
    title: "First Successful Landing",
    description: "Falcon 9 achieves the first successful landing of an orbital-class rocket booster.",
    category: "Innovation"
  },
  {
    year: "2018",
    title: "Falcon Heavy Debut",
    description: "Falcon Heavy successfully launches, becoming the most powerful operational rocket.",
    category: "Power"
  },
  {
    year: "2020",
    title: "Crew Dragon Success",
    description: "First crewed mission to ISS, returning human spaceflight capability to the United States.",
    category: "Crew"
  },
  {
    year: "2021",
    title: "All-Civilian Mission",
    description: "Inspiration4 becomes the first all-civilian mission to orbit Earth.",
    category: "Civilian"
  },
  {
    year: "2023",
    title: "Starship Development",
    description: "Continued development of Starship for Mars missions and deep space exploration.",
    category: "Future"
  }
];

const stats = [
  { value: 200, suffix: "+", label: "Total Launches", description: "Successful missions completed" },
  { value: 150, suffix: "+", label: "Successful Landings", description: "Reusable rocket recoveries" },
  { value: 5000, suffix: "+", label: "Starlink Satellites", description: "Global internet constellation" },
  { value: 50, suffix: "+", label: "Astronauts Transported", description: "Crew missions to space" }
];

const categoryColors = {
  Foundation: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Milestone: "bg-green-500/20 text-green-300 border-green-500/30",
  Commercial: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Innovation: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Power: "bg-red-500/20 text-red-300 border-red-500/30",
  Crew: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Civilian: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Future: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
};

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From revolutionary rocket landings to pioneering commercial spaceflight, 
            SpaceX continues to push the boundaries of what's possible in space exploration.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Counter end={stat.value} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Journey Through Time
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-blue-400">
                            {achievement.year}
                          </span>
                          <Badge className={categoryColors[achievement.category as keyof typeof categoryColors]}>
                            {achievement.category}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                The Journey Continues
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                These achievements are just the beginning. With Starship development, Mars missions, 
                and the expansion of human presence in space, the future holds even greater milestones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Missions
                </button>
                <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                  View Timeline
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}