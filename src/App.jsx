import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from "./components/Projects.jsx"
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
function App() {


  return (
    
      <div className='bg-background'>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
        <Experience/>

      </div>
  )
}

export default App
