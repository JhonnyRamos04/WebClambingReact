
export const TeacherItem = ({ name, description, id, img }) => {
    return (
        <div className="relative mt-6 bg-gray-900/70 flex flex-col justify-between items-center w-[400px] h-[650px] text-gray-200 p-6 text-3xl overflow-hidden font-bold border-b-2 rounded-lg border-gray-100">
            <div className="w-[400px] px-8">
                <span>{name}</span>
                <p className="text-base font-light text-pretty">{description}</p>
            </div>
            <div className=" absolute bottom-0 w-[420px]">
                <img src={img} alt={`Entrenador ${id}`} className="w-full" />
            </div>
        </div>
    )
}
