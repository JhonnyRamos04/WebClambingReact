import { Link } from "react-router-dom"

export const Button2 = () => {
    return (
        <Link to='/Contact' className="cursor-pointer group relative flex items-center hover:scale-105 hover:text-emerald-600 transition-all gap-1.5 px-16 py-4 bg-gray-100 bg-opacity-80 text-[#131313] md:mt-8 mt-2 mb-2 rounded-3xl hover:bg-opacity-70 duration-300 font-semibold shadow-md">
            <span>Contacto</span><div className="mgc_arrow_right_circle_fill text-xl"></div>
        </Link>
    )
}
