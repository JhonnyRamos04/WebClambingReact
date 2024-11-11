import { TeacherItem } from "./TeacherItem"

export const Teacher = () => {
    const TEACHERS = [
        {
            id: 1,
            name: 'Carlos Carrillo',
            Description: 'Su energía positiva y su capacidad para inspirar a otros hacen de Carlos un entrenador excepcional. Él cree en el potencial de cada escalador y los empuja a alcanzar sus metas en el bouldering.',
            img: './Carlos.png'
        },
        {
            id: 2,
            name: 'Milena Flores',
            Description: 'Para Milena, la escalada tradicional es mucho más que un deporte. Es una forma de conectar con la naturaleza y de encontrar la paz interior. Transmite esta pasión a sus alumnos, animándoles a disfrutar de la belleza de los paisajes mientras escalan.',
            img: './Milena.png'
        },
        {
            id: 3,
            name: 'Yant Colmenares',
            Description: 'Con una técnica impecable y una pasión contagiosa por la escalada deportiva, Yant guía a sus alumnos a superar sus límites con paciencia y entusiasmo. Su enfoque holístico combina técnica, fuerza y mentalidad positiva, creando un ambiente donde cada escalador se siente apoyado y motivado.',
            img: './Yant.png'
        }
    ]

    return (
        <>
            <section className="flex flex-col bg-gray-800 h-auto p-12 items-center">
                <h1 className="mt-16 text-gray-100 text-4xl font-bold">Conoce a nuestros instructores</h1>
                <div className="flex flex-wrap w-full gap-6 justify-center items-center">
                    {
                        TEACHERS.map(item => (
                            <div key={item.id} className="hover:scale-105 transition-all duration-150">
                                <TeacherItem id={item.id} img={item.img} name={item.name} description={item.Description} />
                            </div>
                        ))
                    }
                </div>

            </section>

        </>
    )
}
