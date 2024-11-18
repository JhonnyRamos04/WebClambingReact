import { MountainIcon } from "./icons/MountainIcon"
import { Link } from "react-router-dom"
export const RoutesHeader = () => {
    return (
        <header className="p-6 border-b-2 border-white/70 w-full text-gray-100 z-20">
            <nav className="flex justify-between items-end" >
                <Link to='/'
                    className={`filter drop-shadow-md font-black text-3xl flex justify-center items-center z-10 `}
                >
                    TheClimb <MountainIcon />
                </Link>
                <ul className="flex text-xl font-semibold">
                    <li><a className="hover:border-b-2 p-6" href="#">Humbold</a></li>
                    <li><a className="hover:border-b-2 p-6" href="#">Espejo</a></li>
                    <li><a className="hover:border-b-2 p-6" href="#">El Toro</a></li>
                    <li><a className="hover:border-b-2 p-6" href="#">BondPland</a></li>
                </ul>
            </nav>
        </header>
    )
}
