'use client'

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MountainIcon } from "./icons/MountainIcon"
import { RouteLi } from "./RouteLi"

const ACTIVATORS = [
    { name: 'Humbold', path: '/Routes/Humbold', id: 'H' },
    { name: 'Espejo', path: '/Routes/Espejo', id: 'E' },
    { name: 'El Toro', path: '/Routes/ElToro', id: 'T' },
    { name: 'BonPland', path: '/Routes/BondPland', id: 'B' },
]

export const RoutesHeader = ({ newId, setMap }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsMenuOpen(false)
        setMap(false)
    }, [newId])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800/80 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-16">
                    <Link to='/' className="flex items-center space-x-2 text-3xl font-black filter drop-shadow-md">
                        <span>TheClimb</span>
                        <MountainIcon className="w-8 h-8" />
                    </Link>

                    <ul className="hidden md:flex space-x-5">
                        {ACTIVATORS.map((item) => (
                            <RouteLi key={item.id} newId={newId} {...item} />
                        ))}
                    </ul>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-50 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                        <Link to='/' className="flex items-center space-x-2 text-3xl font-black" onClick={() => setIsMenuOpen(false)}>
                            <span>TheClimb</span>
                            <MountainIcon className="w-8 h-8" />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Close menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col items-center justify-center flex-grow space-y-8 text-2xl font-bold">
                        {ACTIVATORS.map((item) => (
                            <li key={item.id} className="w-full text-center" onClick={() => setIsMenuOpen(false)}>
                                <RouteLi newId={newId} {...item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}


