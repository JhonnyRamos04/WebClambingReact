export const Button = ({ handleClick }) => {

    return (
        <button onClick={handleClick} className="cursor-pointer group relative flex items-center hover:scale-105 hover:text-yellow-300 transition-all gap-1.5 px-16 py-4 bg-black bg-opacity-80 text-[#f1f1f1] md:mt-8 mt-2 mb-2 rounded-3xl hover:bg-opacity-70 duration-300 font-semibold shadow-md">
            <span>Ver mapa</span><div className="mgc_location_fill text-xl"></div>
        </button>
    )
}
