import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { WhyBento } from "../components/WhyBento"
import { Adventage } from "../components/Adventage"
import { Questions } from "../components/Questions"
import { Contact } from "../components/Contact"
import { TeachersHero } from "../components/TeachersHero"
import { useLocation } from "react-router-dom"
import { useLayoutEffect, useRef } from "react"

export function Home() {
    const location = useLocation()
    const ref = useRef()
    document.body.style.overflow = 'auto'

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <>
            <Header />
            <main  >
                <Hero />
                <Adventage />
                <TeachersHero />
                <WhyBento />
                <Contact />
                <Questions ref={ref} />

            </main>
            <Footer />
        </>
    )
}