import { Gallery } from "./ui/Gallery"

export const LandScapes = () => {
    return (
        <section className='relative bg-gray-100 sm:py-16 flex items-center justify-center h-[800px] overflow-hidden'>
            <div className="size-52 bg-[#a8ddc2] absolute rotate-12 -left-20 top-20" aria-hidden></div>
            <div className="size-72 bg-[#a8ddc2] absolute -rotate-12 -right-6 bottom-20" aria-hidden></div>
            <div className='flex flex-col md:flex-row items-center justify-around w-full mt-6'>
                <Gallery />
                <div className='max-w-[600px] p-4 sm:p-0 z-0'>
                    <h2
                        className='text-3xl md:text-5xl font-semibold text-gray-900 mb-4 mt-8 sm:mt-0'
                    >
                        ¡Maravillosos Paisajes!
                    </h2>
                    <p className='text-lg text-gray-700 mb-6 text-pretty'>
                        Sumérgete en la belleza salvaje de la naturaleza mientras escalas
                        paredes que desafían la gravedad. Cada ascenso es un viaje único, donde
                        la adrenalina se mezcla con la contemplación de paisajes que te dejarán
                        sin aliento.
                    </p>
                </div>
            </div>
        </section>
    )
}
