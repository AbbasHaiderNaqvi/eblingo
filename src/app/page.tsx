'use client';
import React, { useState } from 'react';
import Hero from './components/Hero';
import styles from '../app/styles/Navbar.module.css'
import Service from './components/Service';
import About from './components/About';
import AdvantageSection from './components/AdvantageSection';
import WhatWeDo from './components/WhatWeDo';
import Offer from './components/Offer';
import Clienttestimonial from './components/Clienttestimonial';
import Blog from './components/Blog';
import Navbar from './components/Navbar';



export default function Home() {
  // const [openMenu,setopenMenu]=useState(false);
  return (
    <main>
      <div>
        {/* <div 
style={{backgroundColor: 'white',
      height: 60,
      paddingLeft:12,
      paddingTop:12,      
}
}
className={styles.IconMenu}>
  <div>
    <MenuOutlined style={{
      fontSize:30
    }} onClick={() =>{
          setopenMenu(true);
        }} />
  </div>
        <Drawer
        open={openMenu}
        onClose={() =>{
          setopenMenu(false);
        }}
        closable={false}>
          <Navbar />
        </Drawer>
        </div>
        <span className={styles.HeaderMenu}>
          <Navbar />
          </span> */}
        <Navbar />
        <Hero />
        <Service />
        <About />
        <AdvantageSection />
        <WhatWeDo />
        <Offer />
        <Clienttestimonial />
        <Blog />
      </div>
    </main>
  )
}
