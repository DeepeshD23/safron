import React from 'react';
import { Bed, Users, Car, Wind } from 'lucide-react';

const amenities = [
  { icon: Bed, text: '4 Bedrooms' },
  { icon: Users, text: '12 Guests' },
  { icon: Car, text: 'Free parking' },
  { icon: Wind, text: 'Air conditioning' }
];

export default function VillaDetails() {
  return (
    <div className="space-y-8 bg-[#1A1A1A] p-8 rounded-lg">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">About</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Tucked away cosily in the lap of nature, this is the perfect destination 
            getaway for a vacation trip near Delhi and Chandigarh.
          </p>
          <p>
            The tourist-favourite Bhimtal Lake is only a stone's throw away.
            <button className="ml-2 text-[#D4AF37] hover:text-[#C19B2C] transition-colors">
              Read more
            </button>
          </p>
        </div>
      </section>

      <div className="flex gap-4 flex-wrap">
        {['House Rules', 'Cancellation Policy', 'Things you need to know', 'Things to do'].map((text) => (
          <button 
            key={text}
            className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-[#2A2A2A] transition-colors"
          >
            {text}
          </button>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Amenities</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {amenities.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <Icon className="text-gray-300" size={24} />
              <span className="text-gray-300">{text}</span>
            </div>
          ))}
        </div>
        <button className="text-[#D4AF37] hover:text-[#C19B2C] transition-colors">
          View all Amenities
        </button>
      </section>
    </div>
  );
}