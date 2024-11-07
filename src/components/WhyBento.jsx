//import { Wave } from "./ui/Wave"

export const WhyBento = () => {

    return (
        <section
            className='bg-gray-800 flex flex-col justify-center items-center p-8 gap-y-8 relative'
        >
            <h2 className="md:pt-12 text-gray-100 font-extrabold text-4xl">Adéntrate en nuestras Rutas
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 text-gray-100 md:p-0'>
                <a href="#" className="rounded-2xl bg-Humbold hover:scale-105 hover:border border-green-600 transition-all duration-200 bg-cover md:aspect-[16/8] w-[700px] md:col-span-2 md:row-span-1 h-full flex items-end ">
                    <div className="w-full h-14 overflow-hidden bg-gray-700/30 px-6 py-3 rounded-b-2xl filter backdrop-blur-sm">
                        <span className="font-bold text-2xl text-left text-pretty tracking-separated">EL Pico Humbold</span>
                    </div>
                </a>
                <a href="#" className="rounded-2xl bg-PicoEspejo hover:scale-105 hover:border border-green-600 transition-all duration-200 bg-cover md:col-start-3 md:row-span-2 h-full flex items-start">
                    <div className="w-full h-auto bg-gray-700/30 px-6 py-3 rounded-t-2xl filter backdrop-blur-sm">
                        <span className="font-bold text-2xl text-left text-pretty tracking-separated ">EL Pico Espejo</span>
                    </div>

                </a>
                <a href="#" className="rounded-2xl bg-PicoElToro hover:scale-105 hover:border border-green-600 transition-all duration-200 bg-cover md:row-span-1 h-full flex items-end ">
                    <div className="w-full h-auto bg-gray-700/30 px-6 py-3 rounded-b-2xl filter backdrop-blur-sm">
                        <span className="font-bold text-2xl text-left text-pretty tracking-separated ">El Pico El Toro</span>
                    </div>
                </a>
                <a href="#" className="rounded-2xl bg-PicoBond hover:border border-green-600 hover:scale-105 transition-all duration-200 bg-cover md:row-span-1 h-full flex items-end ">
                    <div className="w-full h-auto bg-gray-700/30 px-6 py-3 rounded-b-2xl filter backdrop-blur-sm">
                        <span className="font-bold text-2xl text-left text-pretty tracking-separated ">El Pico Bonpland</span>
                    </div>

                </a>
            </div>
        </section >
    )
}
