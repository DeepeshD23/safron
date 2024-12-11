import React from 'react';
import { Search, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1A1A1A] z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-white">XSERIES</h1>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="search for location, villa, facilities" 
              className="w-[400px] pl-10 pr-4 py-2 bg-[#2A2A2A] text-white placeholder-gray-400 rounded-lg text-sm border border-gray-700 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#D4AF37] rounded-full" />
            <span className="font-medium text-white">SaffronStays</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={20} />
            <span>08069160000</span>
          </div>

          <button className="px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-[#C19B2C] transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}