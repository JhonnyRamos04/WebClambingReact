import { Gallery } from "./ui/Gallery"

export const LandScapes = () => {
    return (
        <section className='bg-gray-100 md:py-16 flex items-center justify-center'>
            <div className='flex flex-col lg:flex-row items-center justify-around w-full mt-6'>
                <Gallery />
                <div className='max-w-[600px] p-4 md:p-0'>
                    <h2
                        className='text-3xl md:text-5xl font-semibold text-gray-900 mb-4 mt-8 md:mt-0'
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
