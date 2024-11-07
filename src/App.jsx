import { useInView } from "react-intersection-observer"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
//import { LandScapes } from "./components/LandScapes"
import { WhyBento } from "./components/WhyBento"
//import { AboutUs } from "./components/AboutUs"
import { Adventage } from "./components/Adventage"
import { Questions } from "./components/Questions"
import { Contact } from "./components/Contact"
import { Teachers } from "./components/Teachers"



function App() {
  const { ref, inView } = useInView()
  return (
    <>
      <Header entry={inView} />
      <main >
        <Hero newRef={ref} />
        <Adventage />
        <Teachers />
        <WhyBento />
        <Contact />
        <Questions />
        <Footer />
      </main>
    </>
  )
}

export default App
