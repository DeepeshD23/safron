import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80',
  // Add more images here
];

export default function ImageGallery() {
  return (
    <div className="relative h-[70vh] bg-black">
      <div className="absolute inset-0">
        <img 
          src={images[0]} 
          alt="Villa" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button 
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}