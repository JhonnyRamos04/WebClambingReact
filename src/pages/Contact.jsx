import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FormContact } from "../components/FormContact";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function Contact() {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header />
            <main>
                <FormContact />
            </main>
            <Footer />

        </>
    )
}