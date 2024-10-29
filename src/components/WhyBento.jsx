import { Wave } from "./ui/Wave"

export const WhyBento = () => {

    return (
        <section
            className='bg-[#a8ddc2] flex flex-col justify-center items-center p-8 gap-y-8 relative'
        >
            <Wave className={"absolute -top-24 -left-20 z-0 w-[800px]"} fill={"#a8ddc2"} />
            <Wave className={"absolute -bottom-14 right-6 z-10 w-[400px] rotate-180"} fill={"#a8ddc2"} />
            <h2 className='text-gray-800 text-2xl font-bold mt-12'>
                ¿Por qué comenzar con la escalada?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-0'>
                <div className="rounded-2xl px-8 bg-gradient-to-r from-[#fef6db] to-[#fce197] text-yellow-500 gap-x-8 md:aspect-[16/8] md:col-span-2 md:row-span-1 h-full flex justify-center w-full">
                    <div className="flex flex-col py-8">
                        <span className="py-1 px-12 font-bold text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-72">Mejora de la resistencia</span>
                        <p className="text-pretty py-6 px-12 font-normal">Conviértete en una maquina de resistencia con la escalada.
                            Desarrollaras una resistencia cardiovascular y muscular que te sorprenderá! </p>
                    </div>
                    <div className="size-full overflow-hidden">
                        <img className="object-cover object-left-bottom size-[120%]" src="/HeroResistance.png" alt="ResistanceImg" />
                    </div >
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-[#ffd2d2] to-[#f9b395] text-red-400 md:col-start-3 md:row-span-2 md:h-full flex flex-col">
                    <span className="font-bold px-4 py-2 text-3xl text-left text-pretty tracking-separated pr-3 md:max-w-64">Mejora de la elasticidad</span>
                    <div className="size-full">
                        <img src="/HeroFlexibility.png" alt="FlexibilityImg" className="object-cover object-left-bottom  size-full " />
                    </div>

                </div>
                <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 text-sky-900 md:row-span-1 p-6">
                    <span className="font-bold text-3xl text-left text-pretty tracking-separated md:max-w-64">Mejora de la concentración</span>
                    <img src="/HeroFocus.png" alt="FocusImg" />
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-emerald-300 to-emerald-500 text-emerald-700 md:row-span-1 md:h-full p-6">
                    <span className="font-bold text-3xl text-left text-pretty tracking-separated md:max-w-64">Mejora el Equilibrio</span>
                    <img src="/HeroBalance.png" alt="Balance" className=" object-contain object-center h-full" />
                </div>
            </div>
        </section >
    )
}
