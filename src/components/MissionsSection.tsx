"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Satellite, Globe, Users } from "lucide-react";

const missions = [
  {
    id: 1,
    title: "Mars Colonization",
    description: "Making life multiplanetary through sustainable human settlement on Mars",
    status: "In Development",
    timeline: "2029+",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f30cd19b-48c9-4873-be83-eeaf235b2918.png",
    icon: <Rocket className="h-6 w-6" />,
    details: "Establishing a self-sustaining city on Mars to ensure the long-term survival of humanity",
    progress: 65,
    statusColor: "bg-orange-500"
  },
  {
    id: 2,
    title: "Starlink Global Internet",
    description: "Providing high-speed internet access to underserved areas worldwide",
    status: "Active",
    timeline: "Ongoing",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e3b1c20-68f7-4fe0-9530-e3506678278f.png",
    icon: <Satellite className="h-6 w-6" />,
    details: "A constellation of thousands of satellites delivering broadband internet globally",
    progress: 85,
    statusColor: "bg-green-500"
  },
  {
    id: 3,
    title: "International Space Station",
    description: "Regular crew and cargo missions to support ISS operations",
    status: "Active",
    timeline: "2020-2030",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cc421dd-7cfc-4cb4-9fa7-a91714b68ecb.png",
    icon: <Globe className="h-6 w-6" />,
    details: "Reliable transportation for astronauts and supplies to the International Space Station",
    progress: 95,
    statusColor: "bg-blue-500"
  },
  {
    id: 4,
    title: "Artemis Moon Program",
    description: "Supporting NASA's mission to return humans to the Moon",
    status: "In Progress",
    timeline: "2025-2028",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54824050-f72f-4491-a819-9704dca89c98.png",
    icon: <Users className="h-6 w-6" />,
    details: "Lunar lander missions to establish sustainable presence on the Moon",
    progress: 40,
    statusColor: "bg-purple-500"
  },
  {
    id: 5,
    title: "Commercial Satellite Deployment",
    description: "Launching satellites for commercial and government customers",
    status: "Active",
    timeline: "Ongoing",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4248200d-06bc-4dd5-8027-268165ddda1e.png",
    icon: <Satellite className="h-6 w-6" />,
    details: "Cost-effective satellite deployment services for various orbital requirements",
    progress: 90,
    statusColor: "bg-green-500"
  },
  {
    id: 6,
    title: "Deep Space Exploration",
    description: "Missions to explore the outer solar system and beyond",
    status: "Planning",
    timeline: "2030+",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ac45ea6-af0c-4dd6-9a29-27dbec2c53ad.png",
    icon: <Rocket className="h-6 w-6" />,
    details: "Robotic missions to Jupiter, Saturn, and interstellar space exploration",
    progress: 20,
    statusColor: "bg-gray-500"
  }
];

export default function MissionsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Missions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SpaceX is advancing the future of space exploration through ambitious missions 
            that push the boundaries of what's possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <Card 
              key={mission.id} 
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${mission.statusColor} text-white`}>
                    {mission.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                  {mission.icon}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                    {mission.title}
                  </CardTitle>
                  <span className="text-sm text-gray-400">{mission.timeline}</span>
                </div>
                <CardDescription className="text-gray-300">
                  {mission.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  {mission.details}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${mission.statusColor} transition-all duration-1000`}
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            View All Missions
          </Button>
        </div>
      </div>
    </section>
  );
}