import { useLayoutEffect } from "react";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { RoutesBlog } from "../components/RoutesBlog"
import { useLocation } from "react-router-dom";

export function ClimbRoutes() {

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <Header Active={true} />
            <main>
                <section>
                    <div className="h-[500px] w-full relative">
                        <img className="size-full object-center object-cover absolute inset-0" src="/MountainLandscape-4.jpg" alt="" />
                        <div className="h-full w-full bg-white/10 backdrop-blur-sm absolute inset-0"></div>
                    </div>
                </section>
                <RoutesBlog />
            </main>
            <Footer />
        </>
    )
}