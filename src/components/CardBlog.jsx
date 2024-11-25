

export const CardBlog = ({ Distance, PosSlope, NegSlope, Difficulty, MaxAltitude, MinAltitude }) => {
    return (
        <>
            <div
                className="max-w-xs overflow-hidden text-gray-800 bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                ></div>
                <div className="p-4 md:p-6 relative z-10 flex flex-col text-base md:text-lg">
                    <span className="mb-1 text-xl md:text-3xl font-extrabold text-[#5c6a99]">Estadísticas de la Ruta</span>
                    <span className="flex gap-1"><div className="mgc_road_fill text-xl text-sky-700"></div>Distancia: {Distance}</span>
                    <span className="flex gap-1"><div className="mgc_map_2_fill text-xl text-amber-900"></div>Desnivel Positivo: {PosSlope}</span>
                    <span className="flex gap-1"><div className="mgc_map_2_line text-xl text-amber-700"></div>Desnivel Negativo: {NegSlope}</span>
                    <span className="flex gap-1"><div className="mgc_axe_fill text-xl text-red-900"></div>Dificultad Técnica: {Difficulty}</span>
                    <span className="flex gap-1"><div className="mgc_mountain_fill text-xl text-green-900"></div>Altitud Máxima: {MaxAltitude}</span>
                    <span className="flex gap-1"><div className="mgc_mountain_line text-xl text-green-700"></div>Altitud Mínima: {MinAltitude}</span>
                </div>
            </div>


        </>
    )
}
