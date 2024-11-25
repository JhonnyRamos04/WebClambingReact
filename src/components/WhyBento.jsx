//import { Wave } from "./ui/Wave"
import { Link } from "react-router-dom"

export const WhyBento = () => {
    return (
        <section className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 text-center mb-8 sm:mb-12">
                    Adéntrate en nuestras Rutas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        to="/Routes/Humbold"
                        className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 group"
                        aria-label="Explorar El Pico Humbold"
                    >
                        <div className="rounded-2xl bg-Humbold bg-cover bg-center h-64 sm:h-80 lg:h-96 flex items-end overflow-hidden group-hover:ring-4 group-hover:ring-white/20 transition duration-300 ease-in-out">
                            <div className="w-full bg-gradient-to-t from-gray-900/80 to-transparent p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-in-out">
                                <span className="font-bold text-2xl sm:text-3xl text-gray-100 block">El Pico Humbold</span>
                                <span className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Descubre la majestuosidad de esta ruta</span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/Routes/Espejo"
                        className="col-span-1 row-span-2 group"
                        aria-label="Explorar El Pico Espejo"
                    >
                        <div className="rounded-2xl bg-PicoEspejo bg-cover bg-center h-64 sm:h-full flex items-end overflow-hidden group-hover:ring-4 group-hover:ring-white/20 transition duration-300 ease-in-out">
                            <div className="w-full bg-gradient-to-t from-gray-900/80 to-transparent p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-in-out">
                                <span className="font-bold text-2xl sm:text-3xl text-gray-100 block">El Pico Espejo</span>
                                <span className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Una vista incomparable te espera</span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/Route/ElToro"
                        className="col-span-1 group"
                        aria-label="Explorar El Pico El Toro"
                    >
                        <div className="rounded-2xl bg-PicoElToro bg-cover bg-center h-64 sm:h-72 flex items-end overflow-hidden group-hover:ring-4 group-hover:ring-white/20 transition duration-300 ease-in-out">
                            <div className="w-full bg-gradient-to-t from-gray-900/80 to-transparent p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-in-out">
                                <span className="font-bold text-2xl text-gray-100 block">El Pico El Toro</span>
                                <span className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Desafía tus límites en esta ruta</span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/Route/BondPland"
                        className="col-span-1 group"
                        aria-label="Explorar El Pico Bonpland"
                    >
                        <div className="rounded-2xl bg-PicoBond bg-cover bg-center h-64 sm:h-72 flex items-end overflow-hidden group-hover:ring-4 group-hover:ring-white/20 transition duration-300 ease-in-out">
                            <div className="w-full bg-gradient-to-t from-gray-900/80 to-transparent p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-in-out">
                                <span className="font-bold text-2xl text-gray-100 block">El Pico Bonpland</span>
                                <span className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Explora la belleza natural de este pico</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}


