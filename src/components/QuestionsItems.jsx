import { useState } from "react"

export const QuestionsItems = ({ Quest, Content }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className={`w-[650px] transition-all delay-200 duration-100 py-2 rounded-md px-4 border-b-4 h-12 ${active ? 'h-[220px] bg-gray-900/50' : ''}  overflow-hidden my-2`}>
            <h3 className="text-xl"><button onClick={handleClick} className="w-full flex justify-between" type="button">{Quest}
                <span className="mgc_plus_fill"></span></button></h3>
            {
                active &&
                <p className=" text-lg font-normal p-6">
                    {Content}
                </p>
            }
        </div>
    )
}
