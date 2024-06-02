


import './App.css'
import Header from './components/Navbar/Navbar'
import Hero from './components/Hero.jsx/Hero'
import Newsletter from './components/Newsletter/Newsletter'
import SessionImg from './components/SessionImg/SessionImg'
import About from './components/About/About'
import ScrollTotop from './components/scroll/ScrollTotop'
import Generate from './components/Generate/Generate'
import SecCard from './compon/SecCard'
import OurTeam from './components/OurTeam/OurTeam'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
     <Header/>
     <Hero/>
     <Newsletter Title="Discover The Power of Ai"/>
     <SessionImg/>
     <About/>
     <Generate/>
     <Newsletter Title="Explore Our AI Powered Themes"/>
     <OurTeam/>
     <Footer/>
   <ScrollTotop/>
    </>
  )
}

export default App
