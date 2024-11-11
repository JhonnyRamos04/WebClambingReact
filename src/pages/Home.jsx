import { useInView } from "react-intersection-observer"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { WhyBento } from "../components/WhyBento"
import { Adventage } from "../components/Adventage"
import { Questions } from "../components/Questions"
import { Contact } from "../components/Contact"
import { TeachersHero } from "../components/TeachersHero"
import { useLocation } from "react-router-dom"
import { useLayoutEffect } from "react"

export function Home() {
    const { ref, inView } = useInView()

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header entry={inView} />
            <main >
                <Hero newRef={ref} />
                <Adventage />
                <TeachersHero />
                <WhyBento />
                <Contact />
                <Questions />

            </main>
            <Footer />
        </>
    )
}