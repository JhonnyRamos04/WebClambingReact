import { useState } from "react"
import { MountainIcon } from "./icons/MountainIcon"
import { ToggleButton } from "./ui/ToggleButton"
import { Link } from "react-router-dom"

export const Header = ({ Active }) => {
    const [scroll, setScroll] = useState()

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    })

    return (
        <header className='text-gray-800'>
            {
                <>
                    <span
                        className={`filter drop-shadow-md font-black text-3xl absolute ${Active ? 'hidden' : ''} text-gray-100 top-4 left-6 flex justify-center items-center z-10 `}
                    >
                        TheClimb <MountainIcon />
                    </span>
                    <div className=" top-0 fixed w-full z-30 transition-colors duration-200 delay-75 ">
                        <div className={`transition-all duration-300 delay-75 flex justify-end ease-in-out py-2 px-2 md:px-10 backdrop-blur-sm bg-gray-800/15 shadow-lg gap-x-10 text-gray-100 items-center shadow-slate-900/5 relative w-full  ${!scroll == 0 || Active ? 'top-0' : '-top-20'}`}>
                            <Link to='/'
                                className={`filter drop-shadow-md font-black text-3xl absolute top-4 left-6 flex justify-center items-center z-10 `}
                            >
                                TheClimb <MountainIcon />
                            </Link>
                            <nav>
                                <ul
                                    className='hidden md:flex text-sm max-sm:text-xs [&>li>a]:font-medium [&>li>a]:mx-1 [&>li>a]:px-2 [&>li>a]:py-4 [&>li>a]:inline-block'
                                >
                                    <li>
                                        <Link className='hover:underline' to='/'>Inicio</Link>
                                    </li>
                                    <li>
                                        <Link className='hover:underline' to='/Routes'>Rutas</Link>
                                    </li>
                                    <li>
                                        <Link className='hover:underline' to='/Coach'>Instructores</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='hidden md:block'>
                                <Link to='/Contact' className="text-gray-800 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"> <svg
                                    className="size-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                    viewBox="0 0 16 19"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        className="fill-gray-800 group-hover:fill-gray-800"
                                    ></path>
                                </svg>Contacto
                                </Link>
                            </div>
                        </div>
                    </div>

                </>
            }
            <div className='fixed z-30 right-0 top-1'>
                <ToggleButton />
            </div>
            <div
                className='fixed w-screen bg-gray-100 backdrop-blur h-0 top-0 right-0 z-20 transition-all ease-in-out duration-500 overflow-y-hidden'
                id='menu-pop'
            >
                <ul
                    className='text-gray-100 mt-8 font-bold [&>li]:px-4 [&>li]:py-2 [&>li]:w-full flex h-full py-10 justify-start items-center flex-col gap-y-4 text-2xl'
                >
                    <li className='hover:text-gray-200 transition duration-200'>
                        <a href=''></a>Inicio
                    </li>
                    <li className='hover:text-gray-200 transition duration-200'>
                        <a href=''></a>Sobre Nosotros
                    </li>
                    <li className='hover:text-gray-200 transition duration-200'>
                        <a href=''></a>Tienda
                    </li>
                </ul>
            </div>
        </header>
    )
}

