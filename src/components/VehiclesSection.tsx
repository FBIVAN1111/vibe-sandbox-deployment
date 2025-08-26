"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Zap, Users, Package } from "lucide-react";
import Image from "next/image";

const vehicles = [
  {
    id: "falcon9",
    name: "Falcon 9",
    type: "Orbital Class Rocket",
    status: "Active",
    description: "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aece8a00-0ab5-4071-8028-9b4fc09e127c.png",
    specs: {
      height: "70 m",
      diameter: "3.7 m",
      mass: "549,054 kg",
      payload_leo: "22,800 kg",
      payload_gto: "8,300 kg",
      thrust: "7,607 kN"
    },
    features: [
      "Reusable first stage",
      "Autonomous flight safety system",
      "Grid fins for landing control",
      "Merlin engines with deep throttling"
    ],
    missions: "140+ successful missions",
    reliability: "99.2%"
  },
  {
    id: "falconheavy",
    name: "Falcon Heavy",
    type: "Heavy-Lift Rocket",
    status: "Active",
    description: "Falcon Heavy is the most powerful operational rocket in the world by a factor of two, with the ability to lift into orbit over 64 metric tons.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c445556-93f0-4ce4-9934-a92d5c6bd07c.png",
    specs: {
      height: "70 m",
      diameter: "12.2 m",
      mass: "1,420,788 kg",
      payload_leo: "63,800 kg",
      payload_gto: "26,700 kg",
      thrust: "22,819 kN"
    },
    features: [
      "Three reusable boosters",
      "Simultaneous multi-booster landing",
      "Heavy payload capacity",
      "Mars mission capability"
    ],
    missions: "8+ successful missions",
    reliability: "100%"
  },
  {
    id: "starship",
    name: "Starship",
    type: "Next-Gen Spacecraft",
    status: "In Development",
    description: "Starship is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c91e7317-79f0-4f59-99b9-982ed70de2c2.png",
    specs: {
      height: "121 m",
      diameter: "9 m",
      mass: "5,000,000 kg",
      payload_leo: "100,000+ kg",
      payload_mars: "100,000+ kg",
      thrust: "74,400 kN"
    },
    features: [
      "Fully reusable system",
      "Raptor methane engines",
      "In-orbit refueling capability",
      "Interplanetary travel ready"
    ],
    missions: "Test flights ongoing",
    reliability: "In testing"
  },
  {
    id: "dragon",
    name: "Dragon",
    type: "Crew & Cargo Spacecraft",
    status: "Active",
    description: "Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations like the International Space Station.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4a2d5f6-217a-4132-ba46-6b5e61709e8c.png",
    specs: {
      height: "8.1 m",
      diameter: "4 m",
      mass: "12,200 kg",
      crew_capacity: "7 people",
      cargo_capacity: "6,000 kg",
      pressurized_volume: "9.3 m³"
    },
    features: [
      "Autonomous docking",
      "Emergency escape system",
      "Reusable heat shield",
      "Life support systems"
    ],
    missions: "40+ ISS missions",
    reliability: "99.5%"
  }
];

export default function VehiclesSection() {
  return (
    <section id="vehicles" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SpaceX designs, manufactures and launches advanced rockets and spacecraft. 
            Our vehicles are designed for reliability, reusability, and human spaceflight.
          </p>
        </div>

        <Tabs defaultValue="falcon9" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-800/50">
            {vehicles.map((vehicle) => (
              <TabsTrigger 
                key={vehicle.id} 
                value={vehicle.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {vehicle.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {vehicles.map((vehicle) => (
            <TabsContent key={vehicle.id} value={vehicle.id}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="h-8 w-8 text-blue-400" />
                      <div>
                        <h3 className="text-3xl font-bold text-white">{vehicle.name}</h3>
                        <p className="text-gray-400">{vehicle.type}</p>
                      </div>
                      <Badge 
                        variant={vehicle.status === "Active" ? "default" : "secondary"}
                        className={vehicle.status === "Active" ? "bg-green-600" : "bg-yellow-600"}
                      >
                        {vehicle.status}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">{vehicle.missions}</div>
                        <div className="text-sm text-gray-400">Missions</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">{vehicle.reliability}</div>
                        <div className="text-sm text-gray-400">Success Rate</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More About {vehicle.name}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Package className="h-5 w-5 text-blue-400" />
                        Specifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(vehicle.specs).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <div className="text-sm text-gray-400 capitalize">
                              {key.replace(/_/g, ' ')}
                            </div>
                            <div className="text-white font-semibold">{value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Future of Space Transportation
              </h3>
              <p className="text-gray-300 mb-6">
                SpaceX vehicles are designed with reusability in mind, dramatically reducing the cost of access to space 
                and making life multiplanetary possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">90%</div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">200+</div>
                  <div className="text-sm text-gray-400">Successful Landings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Reused Boosters</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}