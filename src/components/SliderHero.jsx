import { useState } from "react"

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

    const [nextImg, setNextImg] = useState(3)


    const handleNext = () => {
        if (nextImg < PICTURES.length) setNextImg(nextImg + 1)
        else setNextImg(1)
    }

    const handlePrev = () => {
        if (PICTURES.length >= nextImg && nextImg != 1) setNextImg(nextImg - 1)
        else setNextImg(3)

    }

    // useEffect(() => {
    //     setInterval(handleNext, 10000);
    // }, [nextImg])

    return (
        <>
            <div className="relative w-full shadow-2xl shadow-black/45 ">
                <div className="relative overflow-hidden h-[500px] ">
                    {
                        PICTURES.map(item => (
                            <div key={item.id} className={`${nextImg === item.id ? 'opacity-100' : 'opacity-0'} duration-700 ease-in-out`} >

                                <img src={item.img} className="absolute block object-cover object-left  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 contrast-125" alt="..." />
                                <span className={`px-6 py-3 w-[900px] rounded-full absolute text-4xl bottom-10 ${nextImg === item.id ? 'left-8' : '-left-[900px]'} transition-all delay-700 duration-200 bg-black/60  text-gray-100 font-bold filter backdrop-blur-md backdrop-contrast-50 shadow-black`}>{item.title}</span>
                            </div>

                        ))
                    }
                </div>

                <div className="absolute z-30 flex  -translate-x-1/2 bottom-2 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        PICTURES.map(item => (
                            <div key={item.id} type="button" className={`w-3 transition-colors duration-300 h-3 rounded-full border border-white ${nextImg === item.id ? 'bg-white/100' : 'bg-white/10'}`} aria-label="Slide 1" ></div>

                        ))
                    }
                </div>

                <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                        <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div >
        </>
    )
}
/*
    <div key={item.id} className="duration-700 ease-in-out" >
        <img src={item.img} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
*/ 