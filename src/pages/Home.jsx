import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import About from '../components/sections/About'
import SkillsData from '../components/Skills/skillsData'
import Contact from '../components/Contact/Contact'

export default function Home(){
    return (
        <>
        <Navbar/>

        <main>
            <Hero/>
            <About/>
            <SkillsData/>
            <Projects/>
            <Contact/>
        </main>

        <Footer/>
        
        </>
    )
}