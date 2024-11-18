import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Teacher } from "../components/Teacher";
import { useLayoutEffect } from "react";

export function Teachers() {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header Active={true} />
            <main>
                <Teacher />
            </main>
            <Footer />
        </>
    )
}