import React from 'react';
import { Calendar, Users } from 'lucide-react';
import Button from '../common/Button';

export default function PriceCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-gray-400 line-through">₹1,49,086</span>
        <span className="text-2xl font-bold">₹1,00,086</span>
        <span className="text-gray-600">/Night</span>
      </div>

      <div className="bg-[#F8F7F2] rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">Special discounts available!!</p>
        <Button variant="outline" className="mt-2 w-full py-2">
          Unlock Price
        </Button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Check in - Check out"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="2 Guests"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <Button className="w-full py-3">
        Check Availability
      </Button>
    </div>
  );
}