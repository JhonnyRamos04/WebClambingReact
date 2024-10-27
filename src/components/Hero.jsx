import { HeroLink } from "./ui/HeroLink"
import { Wave } from "./ui/Wave"

export const Hero = ({ newRef }) => {
    return (
        <section className='flex' ref={newRef}>
            <Wave className="rotate-90 h-auto w-full absolute bottom-[369px] xl:bottom-[581px] xl:-right-[146px] z-0  " aria-hidden="true" />
            <div
                className='bg-[#457A5F] xl:h-[600px] flex flex-col px-20 py-4 items-center justify-center'
            >
                <div className="max-w-[600px]" >
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-100 mb-4'>
                        ¡Desafía tus límites con la Escalada Deportiva!
                    </h1>
                    <p className='text-base md:text-xl text-gray-200 mb-6 text-pretty'>
                        ¡Descubre la belleza de la escalada en roca! Explora paredes naturales,
                        disfruta de vistas panorámicas y siente la libertad de moverte con
                        gracia y precisión. ¡Te garantizamos una experiencia única!
                    </p>
                </div>
                <HeroLink>Inscribite Ya</HeroLink>

            </div>
            <div className="bg-gray-100/10 w-screen backdrop-blur-sm h-screen absolute -z-10 right-0 -top-24" aria-hidden="true" ></div>
            <div className="w-[700px] object-cover absolute h-full -top-24 right-0 -z-20">
                <img src="/MountainHero2.jpg" alt="Climbing-IMG" className=" w-full h-full " />
            </div>
            <div className="relative left-44 top-16 -rotate-6">
                <img src="/HeroClambing.png" alt="Clambing" className="w-[360px]" />
            </div>
        </section>
    )
}

