import { useInView } from "react-intersection-observer"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { LandScapes } from "./components/LandScapes"
import { Why } from "./components/Why"


function App() {
  const { ref, inView } = useInView()
  return (
    <>
      <Header entry={inView} />
      <main >
        <Hero newRef={ref} />
        <LandScapes />
        <Why />
        <Footer />
      </main>
    </>
  )
}

export default App
