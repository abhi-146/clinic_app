import React from 'react'
import Hero from '../../views/Home/Hero'
import WhyChooseUs from '../../views/Home/WhyChooseUs'
import Team from '../../views/Home/Team'
import Footer from '../../components/Footer'
import Army from '../../views/Home/Army'
import Nav from '../../components/Nav'
import Service from '../../views/Home/Service'
import Director from '../../views/Home/Director'
import Reviews from '../../views/Home/Reviews'
import WhatsAppButton from '../../components/WhatsApp/WhatsAppButton'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Army />
      <Service />
      <Director />
      <WhyChooseUs />
      <Reviews />
      <Team />
      <WhatsAppButton/>
      <Footer />
    </div>
  )
}

export default Home
