import { TeacherItem } from "./TeacherItem"
import { Link } from "react-router-dom"

export const Teacher = () => {
    const TEACHERS = [
        {
            id: 1,
            name: 'Carlos Carrillo',
            Description: 'Su energía positiva y su capacidad para inspirar a otros hacen de Carlos un entrenador excepcional. Él cree en el potencial de cada escalador y los empuja a alcanzar sus metas en el bouldering.',
            age: '48',
            experience: '10',
            img: './Carlos.png'
        },
        {
            id: 2,
            name: 'Milena Flores',
            Description: 'Para Milena, la escalada tradicional es mucho más que un deporte. Es una forma de conectar con la naturaleza y de encontrar la paz interior. Transmite esta pasión a sus alumnos, animándoles a disfrutar de la belleza de los paisajes mientras escalan.',
            age: '26',
            experience: '2',
            img: './Milena.png'
        },
        {
            id: 3,
            name: 'Yant Colmenares',
            Description: 'Con una técnica impecable y una pasión contagiosa por la escalada deportiva, Yant guía a sus alumnos a superar sus límites con paciencia y entusiasmo. Su enfoque holístico combina técnica, fuerza y mentalidad positiva, creando un ambiente donde cada escalador se siente apoyado y motivado.',
            age: '30',
            experience: '5',
            img: './Yant.png'
        }
    ]

    return (
        <>
            <section className="flex flex-col gap-y-6 bg-gray-800 h-auto p-12 items-center">
                <h1 className="mt-16  text-gray-100 text-4xl font-bold text-center md:text-left">Conoce a nuestros instructores</h1>
                <div className="flex flex-wrap w-full gap-6 justify-center items-center">
                    {
                        TEACHERS.map((item, index) => (
                            <TeacherItem key={index} className="hover:scale-105 transition-all duration-150" id={item.id} experience={item.experience} age={item.age} img={item.img} name={item.name} description={item.Description} />
                        ))
                    }
                </div>
                <Link to='/Contact' className=" text-gray-800 flex justify-center gap-2 items-center mx-auto shadow-xl text-xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"> <svg
                    className="size-9 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                </svg>Más información
                </Link>

            </section>

        </>
    )
}
