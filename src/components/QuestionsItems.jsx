import { useState } from "react"

export const QuestionsItems = ({ Quest, Content }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className={`w-[700px] transition-all delay-200 duration-100 py-3 rounded-md px-4 border-b-2 h-12 ${active ? 'h-[260px] bg-green-700/25' : ''}  overflow-hidden my-2`}>
            <h3 className="text-2xl"><button onClick={handleClick} className="w-full flex justify-between" type="button">{Quest}
                <span className="mgc_arrow_down_fill"></span></button></h3>
            {
                active &&
                <p className=" text-xl font-normal p-6">
                    {Content}
                </p>
            }
        </div>
    )
}
