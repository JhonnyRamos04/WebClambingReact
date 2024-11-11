

export const Adventage = () => {
    return (
        <section className="bg-gray-800 py-3">
            <h2 className="text-center text-gray-300 mt-8">¿Por qué comenzar con la escalada?</h2>
            <div className='flex gap-8 md:gap-20 items-center justify-center flex-wrap mt-6 xl:mt-16' >
                <div className="w-32 flex flex-col items-center text-sky-500 ">
                    <div className=" mgc_barbell_fill text-2xl"></div>
                    <span className=" text-center text-base font-extrabold">Resistencia</span>
                </div>
                <div className="w-32 flex flex-col items-center text-yellow-400" >
                    <div className=" shadow-black mgc_run_fill text-2xl"></div>
                    <span className=" text-center text-base font-extrabold">Equilibrio</span>
                </div>
                <div className="w-32 flex flex-col items-center text-orange-400">
                    <div className="filter drop-shadow-2xl shadow-black mgc_head_fill text-2xl"></div>
                    <span className=" text-center text-base font-extrabold">Concentración</span>
                </div>
                <div className="w-32 flex flex-col items-center text-green-400">
                    <div className=" mgc_foot_fill text-2xl"></div>
                    <span className=" text-center text-base font-extrabold">Elasticidad</span>
                </div>
            </div>

        </section>

    )
}
