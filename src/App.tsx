import React from 'react';
import Header from './components/layout/Header';
import ImageGallery from './components/villa/ImageGallery';
import VillaInfo from './components/villa/VillaInfo';
import PriceCard from './components/booking/PriceCard';
import VillaDetails from './components/villa/VillaDetails';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <ImageGallery />
      <VillaInfo />
      
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-[1fr_400px] gap-8">
        <VillaDetails />
        <div className="sticky top-8">
          <PriceCard />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;