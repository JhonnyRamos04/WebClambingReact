import { HeroLink } from "./ui/HeroLink"


export const AboutUs = () => {
    return (
        <section className='relative bg-gray-100 flex items-center justify-center h-[800px] overflow-hidden'>
            <div className="size-52 bg-[#a8ddc2] absolute rotate-12 -left-20 top-20" aria-hidden></div>
            <div className="size-72 bg-[#a8ddc2] absolute -rotate-12 -right-6 bottom-20" aria-hidden></div>
            <div className='flex flex-row items-center justify-around w-full mt-6'>
                <div className='max-w-[600px] p-4 sm:p-0 z-0'>
                    <h2
                        className='text-3xl md:text-5xl font-semibold text-gray-900 mb-4 mt-8 sm:mt-0'
                    >
                        Sobre Nosotros
                    </h2>
                    <p className='text-lg text-gray-700 mb-6 text-pretty'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat quae nisi eaque dicta fugiat dolor excepturi repudiandae,
                        delectus odio quis natus tempora, incidunt laudantium ipsa veritatis accusantium recusandae enim.
                        Praesentium dolorem magni cumque consectetur mollitia quisquam accusamus quas nemo sed.
                    </p>
                    <HeroLink>Contacto</HeroLink>
                </div>
                <img src="/HeroClimb2.jpg" alt="Climb" className="z-10 w-[400px] rounded shadow-lg shadow-gray-800" />

            </div>
        </section>
    )
}
