'use client';
import React, { useState } from 'react';
import Hero from './components/Hero';
import styles from '../app/styles/Navbar.module.css'
import Service from './components/Service';
import About from './components/About';
import AdvantageSection from './components/AdvantageSection';
import WhatWeDo from './components/WhatWeDo';
import Offer from './components/Offer';
import Blog from './components/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <WhatWeDo />
        <Offer />
        <Blog />
        <AdvantageSection />
        <Footer />
      </div>
    </main>
  )
}
