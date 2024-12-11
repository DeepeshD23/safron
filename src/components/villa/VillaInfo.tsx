import React from 'react';
import { Star, Share2, Heart } from 'lucide-react';

export default function VillaInfo() {
  return (
    <div className="px-8 py-6 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Sea La Vie</h1>
        <p className="text-lg text-gray-300 mb-4">Alibaug, Maharashtra</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={20} />
              <span className="font-medium">4.5</span>
              <span className="text-gray-400 mx-1">/5</span>
              <a href="#reviews" className="text-gray-300 hover:text-white">
                105 reviews
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10">Entire Villa</span>
              <span className="px-3 py-1 rounded-full bg-white/10">6-12 Guests</span>
              <span className="px-3 py-1 rounded-full bg-white/10">8 Bedrooms</span>
              <span className="px-3 py-1 rounded-full bg-white/10">Pet-Friendly</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-white/10">
              <Share2 size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}