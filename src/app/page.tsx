import React from 'react';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import AdvantageSection from './components/AdvantageSection';
import WhatWeDo from './components/WhatWeDo';
import Offer from './components/Offer';
import Blog from './components/Blogs';


export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Service />
        <WhatWeDo />
        <Offer />
        <Blog />
        <AdvantageSection />
      </div>
  )
}
