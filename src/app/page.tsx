import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service'
import About from './components/About'
import ContactForm from './components/ContactForm'
import AdvantageSection from './components/AdvantageSection'
import Footer from './components/Footer'
import Offer from './components/Offer'
import Clienttestimonial from './components/Clienttestimonial';
import Blog from './components/Blog'
import WhatWeDo from './components/WhatWeDo'



export default function Home() {
  return (
    <main>
    <div>
       <Navbar />
       <Hero />
       <Service />
       <About />
       <AdvantageSection />
       <WhatWeDo />
       <Offer />
       <Clienttestimonial />
       <Blog />
       <Footer />
       
    </div>
    </main>
  )
}
