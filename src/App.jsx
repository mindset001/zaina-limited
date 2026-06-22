import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/hero/Hero'
import About from './components/sections/About'
import Culture from './components/sections/Culture'
import Team from './components/sections/Team'
import Gallery from './components/sections/Gallery'
import Projects from './components/sections/Projects'
import Ongoing from './components/sections/Ongoing'

function App() {
  return (
    <div className="overflow-x-hidden bg-navy-950">
      <Navbar />
      <Hero />
      <About />
      <Culture />
      <Team />
      <Gallery />
      <Projects />
      <Ongoing />
      <Footer />
    </div>
  )
}

export default App
