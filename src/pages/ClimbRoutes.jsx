import { useLayoutEffect } from "react";
import { Footer } from "../components/Footer"
import { RoutesBlog } from "../components/RoutesBlog"
import { useLocation } from "react-router-dom";

export function ClimbRoutes({ newId }) {

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>

            <main>
                <RoutesBlog newId={newId} />
            </main>
            <Footer />
        </>
    )
}