import { MountainIcon } from "./icons/MountainIcon"
import { Link } from "react-router-dom"
import TwitterIcon from "./icons/TwitterIcon"
import InstagramIcon from "./icons/InstagramIcon"

export const Footer = () => {


    return (
        <footer className='bg-gray-900'>
            <div className=' mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div className='md:flex md:justify-between'>
                    <div className='mb-6 md:mb-0'>
                        <Link to='/' className='flex items-center'>
                            <span
                                className='self-center flex items-center filter drop-shadow-md text-2xl font-semibold whitespace-nowrap text-white'
                            >TheClimb <MountainIcon /></span>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <ul className='text-gray-100 font-medium flex flex-wrap gap-x-6'>
                                <li className='mb-4'>
                                    <Link to='/' className='hover:underline'>Inicio</Link>
                                </li>
                                <li>
                                    <Link to='/Coach' className='hover:underline'>Instructores</Link>
                                </li>
                                <li>
                                    <Link to='/Routes' className='hover:underline'>Rutas</Link>
                                </li>
                                <li>
                                    <Link to='/Contact' className='hover:underline'>Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='my-6 sm:mx-auto border-gray-100 lg:my-8' />
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <span className='text-sm sm:text-center text-gray-100'
                    >© 2024 Jhonny Ramos™. Todos
                        los derechos reservados.
                    </span>
                    <div className='flex mt-4 sm:justify-center sm:mt-0'>
                        <a href='https://www.facebook.com' target="_blank" className='text-gray-100 hover:text-white'>
                            <svg
                                className='w-4 h-4'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 8 19'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                                    clipRule='evenodd'></path>
                            </svg>
                            <span className='sr-only'>Facebook page</span>
                        </a>

                        <a href='https://x.com' target="_blank" className='text-gray-100 hover:text-white ms-5'>
                            <TwitterIcon />
                            <span className='sr-only'>Twitter page</span>
                        </a>
                        <a href='https://www.instagram.com' target="_blank" className='text-gray-100 hover:text-white ms-5'>
                            <InstagramIcon />
                            <span className='sr-only'>Instagram Page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
