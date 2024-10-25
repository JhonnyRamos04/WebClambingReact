import { HeroLink } from "./ui/HeroLink"
import { Wave } from "./ui/Wave"

export const Hero = () => {
    return (
        <section className='flex justify-between'>
            <div
                className='bg-[#6595F9] h-screen flex flex-col px-20 py-4 items-center justify-center'
            >
                <div className="max-w-[600px]">
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                        ¡Desafía tus límites en las alturas!
                    </h1>
                    <p className='text-base md:text-xl text-gray-700 mb-6 text-pretty'>
                        ¡Descubre la belleza de la escalada en roca! Explora paredes naturales,
                        disfruta de vistas panorámicas y siente la libertad de moverte con
                        gracia y precisión. ¡Te garantizamos una experiencia única!
                    </p>
                </div>
                <HeroLink>Inscribite Ya</HeroLink>
                <div className="bg-gray-100/40 w-screen backdrop-blur-sm h-screen absolute -z-10 right-0 top-0"></div>
                <div className="w-[700px] object-cover absolute top-0 right-0 -z-20">
                    <img src="/HeroClimb2.jpg" alt="Climbing-IMG" className=" w-full h-screen " />
                </div>

            </div>
            <Wave className="rotate-90 h-[200px] absolute bottom-[350px] right-36 z-0 " />

        </section>
    )
}

