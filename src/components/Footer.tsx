"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Rocket, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SpaceX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making life multiplanetary through revolutionary space technology and exploration.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#missions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Missions
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="#launches" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Launches
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors text-sm">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#suppliers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Suppliers
                </a>
              </li>
              <li>
                <a href="#media" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get the latest news about SpaceX missions and launches.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Space Exploration Technologies Corp. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}