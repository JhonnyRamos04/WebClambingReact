import { useState } from "react"

export const TeacherItem = ({ name, description, age, experience, id, img, className }) => {
    const [renderTeacher, setRenderTeacher] = useState(false)

    const handleClick = () => {
        setRenderTeacher(!renderTeacher)
        document.body.style.overflow = renderTeacher ? "auto" : "hidden";
    }

    return (
        <>
            {
                renderTeacher &&
                <div className="fixed size-full bg-gray-900/50 backdrop-blur-md top-0 right-0 z-20 flex flex-col md:flex-row items-center text-gray-100 text-2xl">
                    <div className=" md:ml-16 flex flex-col text-sm md:text-xl font-normal mt-24 md:mt-0 p-4 md:p-0 md:w-1/2">
                        <h2 className="font-extrabold mb-6 text-4xl md:text-7xl text-yellow-400">{name}</h2>
                        <span>Edad: {age} años</span>
                        <span>Años de experiencia: {experience} años</span>
                        <p className="text-pretty mt-2">{description}</p>
                        <button onClick={handleClick} className=" mt-4 flex items-center gap-2 justify-start font-bold rounded-lg hover:text-yellow-400 hover:scale-110 transition-all duration-500 w-48" ><div className="mgc_arrow_left_fill"></div> Regresar</button>

                    </div>
                    <img className="md:w-[48%] w-[60%] md:absolute right-0" src={img} alt={`Coach ${name}`} />
                </div>
            }
            <button onClick={handleClick} className={className}>
                <div className="relative mt-6 bg-gray-900/70 flex flex-col justify-between items-center w-[360px] md:w-[400px] h-[650px] text-gray-200 p-6 text-3xl overflow-hidden font-bold border-b-2 rounded-lg border-gray-100">
                    <div className="w-[400px] px-8">
                        <span>{name}</span>
                        <p className="text-base font-light text-pretty">{description}</p>
                    </div>
                    <div className=" absolute bottom-0 w-[420px]">
                        <img src={img} alt={`Entrenador ${id}`} className="w-full" />
                    </div>
                </div>
            </button>


        </>


    )
}
