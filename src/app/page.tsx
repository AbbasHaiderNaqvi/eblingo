import React from 'react';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import AdvantageSection from './components/AdvantageSection';
import WhatWeDo from './components/WhatWeDo';
import Offer from './components/Offer';
import Clienttestimonial from './components/Clienttestimonial';
import Blog from './components/Blog';


export default function Home() {
  return (
    <main>
    <div>
      <Hero />
      <Service />
      <About />
      <AdvantageSection />
      <WhatWeDo />
      <Offer />
      <Clienttestimonial />
      <Blog />
      {/* <Publications /> */}
      {/* <Contact /> */}
    </div>
    </main>
  )
}
