

import { useState, useEffect, useCallback } from "react"

export const SliderHero = () => {
    const PICTURES = [
        {
            id: 1,
            img: "/SliderImg1.jpg",
            title: "¡Vive la escalada en su máxima expresión!"
        },
        {
            id: 2,
            img: "/SliderImg2.jpg",
            title: "¡Descubre la belleza de la escalada en roca!"
        },
        {
            id: 3,
            img: "/SliderImg3.jpg",
            title: "¡Desafía tus límites con la Escalada Deportiva!"
        }
    ]

    const [currentImg, setCurrentImg] = useState(1)

    const handleNext = useCallback(() => {
        setCurrentImg(current => current < PICTURES.length ? current + 1 : 1)
    }, [PICTURES.length])

    const handlePrev = useCallback(() => {
        setCurrentImg(current => current > 1 ? current - 1 : PICTURES.length)
    }, [PICTURES.length])

    useEffect(() => {
        const interval = setInterval(handleNext, 10000);
        return () => clearInterval(interval);
    }, [handleNext])

    return (
        <div className="relative w-full shadow-2xl shadow-black/45">
            <div className="relative overflow-hidden h-[500px]">
                {PICTURES.map(item => (
                    <div key={item.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentImg === item.id ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={item.img} className="absolute block w-full h-full object-cover md:object-left contrast-125" alt={item.title} />
                        <span className={`px-6 py-3 md:w-[900px] rounded-full absolute text-2xl md:text-4xl bottom-10 transition-all duration-700 ease-in-out ${currentImg === item.id ? 'left-0 md:left-8 opacity-100' : '-left-[900px] opacity-0'} bg-black/60 text-gray-100 font-bold filter backdrop-blur-md backdrop-contrast-50 shadow-black`}>
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
                {PICTURES.map(item => (
                    <button
                        key={item.id}
                        type="button"
                        className={`w-3 h-3 rounded-full border border-white transition-colors duration-300 ${currentImg === item.id ? 'bg-white' : 'bg-white/10'}`}
                        aria-label={`Slide ${item.id}`}
                        onClick={() => setCurrentImg(item.id)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                onClick={handlePrev}
                className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                aria-label="Previous slide"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                </span>
            </button>
            <button
                type="button"
                onClick={handleNext}
                className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                aria-label="Next slide"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                </span>
            </button>
        </div>
    )
}


/*
    <div key={item.id} className="duration-700 ease-in-out" >
        <img src={item.img} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
*/ 