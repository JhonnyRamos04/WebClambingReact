import { useState } from "react"
import { CardBlog } from "./CardBlog"
import { CardTimeBlog } from "./CardTimeBlog"
import { RoutesHeader } from "./RoutesHeader"
import { Button } from "./ui/Button"
import { Button2 } from "./ui/Button2"

export const RoutesBlog = ({ newId }) => {
    const INFOROUTES = [
        {
            Name: 'Pico Humbold',
            Description: 'El Pico Humboldt pertenece a una de las cumbres más elevadas de Venezuela, es de origen tectónico y su ascenso se realiza desde la Laguna el Suero o desde la Laguna Verde. A estas lagunas se les llega tras una larga jornada desde la Mucuy localidad cercana a Tabay. Los glaciares de este pico son los más extensos gracias a su topografía.',
            Distance: '18,41 km',
            PosSlope: '2.896 m',
            NegSlope: '617 m',
            Difficulty: 'Muy difícil',
            MaxAltitude: '4.935 m',
            MinAltitude: '2.133 m',
            Map: '/MapHumbold.jpg',
            bg: ' bg-BlogHum',
            Am: '2:00 Am',
            Pm: '5:00 - 6:40 Pm',
            id: 'H'
        },
        {
            Name: 'Pico Espejo',
            Description: 'El Pico Espejo es un accidente geográfico ubicado en la Sierra Nevada de la cordillera andina, próximo al Pico Bolívar en Venezuela. Posee una elevación de 4765 m​ y en su cima se ubica la quinta y última estación del sistema Teleférico de Mérida lo cual hace la montaña más accesible de los grandes picos de la Sierra Nevada de Mérida.',
            Distance: '4,83 km',
            PosSlope: '472 m',
            NegSlope: '472 m',
            Difficulty: 'Difícil',
            MaxAltitude: '4.776 m',
            MinAltitude: '4.409 m',
            Map: '/MapEspejo.jpg',
            bg: 'bg-BlogEspejo',
            Am: '4:00 Am',
            Pm: '3:00 - 3:40 Pm',
            id: 'E'
        },
        {
            Name: 'Pico El Toro',
            Description: 'Pico El Toro​ es el nombre que recibe una montaña en el norte de la cordillera de los Andes, en la parte que corresponde a Venezuela.​ Tiene una altitud de 4729 metros, y constituye un área protegida incluida en el Parque nacional Sierra Nevada, parte administrativamente del Estado Mérida.​',
            Distance: '11,95 km',
            PosSlope: '2.769 m',
            NegSlope: '27 m',
            Difficulty: 'Difícil',
            MaxAltitude: '4.614 m',
            MinAltitude: '1.866 m',
            Map: '/MapElToro.jpg',
            bg: 'bg-BlogToro',
            Am: '6:00 Am',
            Pm: '3:00 - 3:40 Pm',
            id: 'T'
        },
        {
            Name: 'Pico BonPland',
            Description: 'El Pico Bonpland es el cuarto pico más alto de Venezuela, a 4883 metros sobre el nivel del mar. El nombre de la cumbre es en honor a Aimé Bonpland, aunque este nunca visitó Los Andes venezolanos. Se encuentra ubicado en la Sierra Nevada de Mérida, en los Andes de Venezuela. Junto con el Pico Humboldt y los páramos circundantes,están protegidos por el parque nacional Sierra Nevada.',
            Distance: '3,4 km',
            PosSlope: '879 m',
            NegSlope: '121 m',
            Difficulty: 'Difícil',
            MaxAltitude: '4.849 m',
            MinAltitude: '3.970 m',
            Map: '/MapBondpland.jpg',
            bg: 'bg-BlogBon',
            Am: '7:00 Am',
            Pm: '8:00 - 8:40 Pm',
            id: 'B'
        }
    ]

    const [map, setMap] = useState(false)

    const handleClick = () => {
        setMap(!map)
        document.body.style.overflow = map ? "auto" : "hidden"
    }

    return (
        <section className="w-full flex flex-col items-center">
            <RoutesHeader newId={newId} setMap={setMap} />
            {
                INFOROUTES.map((item, index) => (
                    <article key={index} className={`flex flex-col items-center justify-center ${item.bg} ${item.id == newId ? '' : 'hidden'} bg-cover w-full h-full md:h-screen text-gray-100`}>
                        {
                            map && item.id == newId && <div className={`fixed size-full bg-gray-900/50 backdrop-blur-md top-0 right-0 z-20 flex flex-col justify-center items-center `}>
                                <div className="flex items-center justify-center text-3xl font-normal mt-12 p-4 md:p-0 w-full">
                                    <button onClick={handleClick} className="absolute left-10 top-20 mt-4 flex items-center gap-2 justify-start font-bold rounded-lg hover:text-yellow-400 hover:scale-110 transition-all duration-500 w-48" ><div className="mgc_arrow_left_fill"></div> Regresar</button>
                                    <div>
                                        <img src={item.Map} className="w-[550px] rounded-lg" alt={`Map ${item.Name}`} />
                                    </div>


                                </div>
                            </div>
                        }
                        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 px-4 md:px-24 md:py-8 py-24 bg-gray-900/40 backdrop-blur-sm w-full h-full">
                            <div>
                                <h2 className="self-start font-bold text-5xl md:text-6xl mb-6">{item.Name}</h2>
                                <p className="font-normal text-base md:text-lg text-pretty mb-6">{item.Description}</p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                    <Button handleClick={handleClick} />
                                    <Button2 />
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-center gap-2">
                                <CardBlog {...item} />
                                <CardTimeBlog {...item} />
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}
