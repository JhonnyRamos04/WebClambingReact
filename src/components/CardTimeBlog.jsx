

export const CardTimeBlog = ({ Am, Pm }) => {
    return (
        <>
            <div
                className=" max-w-xs overflow-hidden text-gray-800 bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                ></div>
                <div className="p-4 md:p-6 relative z-10 flex flex-col text-base md:text-lg">
                    <span className="mb-1 text-xl md:text-3xl font-extrabold text-teal-700/80">Horario</span>
                    <span className="flex items-center gap-1"><div className="mgc_sun_fill text-xl text-yellow-600"></div>Inicio: {Am}</span>
                    <span className="flex items-center gap-1"><div className="mgc_moon_fill text-xl text-gray-700"></div>Final: {Pm}</span>
                </div>
            </div>


        </>
    )
}
