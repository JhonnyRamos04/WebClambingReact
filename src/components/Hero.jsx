export const Hero = () => {
    return (
        <section className='bg-gray-100 py-16 lg:py-20 flex items-center justify-center'>
            <div
                className='flex flex-col p-4 md:p-0 lg:flex-row items-center justify-around w-full lg:mt-2'
            >
                <div className='max-w-[600px]'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        ¡Desafía tus límites en las alturas!
                    </h1>
                    <p className='text-base md:text-xl text-gray-700 mb-6 text-pretty'>
                        ¡Descubre la belleza de la escalada en roca! Explora paredes naturales,
                        disfruta de vistas panorámicas y siente la libertad de moverte con
                        gracia y precisión. ¡Te garantizamos una experiencia única!
                    </p>
                    <HeroLink>Inscribite Ya</HeroLink>
                </div>
                <div>
                    <img
                        src='/Climp-img.png'
                        alt='Hero image'
                        className='size-[350px] md:size-[550px]'
                    />
                </div>
            </div>
        </section>
    )
}

