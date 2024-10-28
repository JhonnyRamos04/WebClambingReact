export const WhyBento = () => {

    return (
        <section
            className='bg-gray-100 flex flex-col justify-center items-center p-8 gap-y-8'
        >
            <h2 className='text-gray-800 text-2xl font-bold mt-12'>
                ¿Por qué comenzar con la escalada?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-0'>
                <div className="rounded-2xl bg-gradient-to-r from-[#fef6db] to-[#fce197] text-ij-yellow md:aspect-[16/8] md:col-span-2 md:row-span-1 h-full">
                    <span className="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64">Mejora de la resistencia</span>
                    <img src="/HeroResistance.png" alt="" />
                </div >
                <div className="rounded-2xl bg-gradient-to-r from-[#ffd2d2] to-[#f9b395] text-ij-red md:col-start-3 md:row-span-2 md:h-full">
                    <span className="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64">Mejora de la elasticidad</span>
                    <img src="/HeroFlexibility.png" alt="" />
                </div>
                <div className="rounded-2xl bg-sky-800 text-ij-blue md:row-span-1">
                    <span className="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64">Mejora de la concentración</span>
                    <img src="/HeroFocus.png" alt="" />
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-[#e6f6ee] to-[#8bcfad] text-ij-green md:row-span-1 md:h-full">
                    <span className="font-medium text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64">Mejora el Equilibrio</span>
                    <img src="/HeroBalance.png" alt="flexibility" />
                </div>
            </div>
        </section >
    )
}
