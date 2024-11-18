import { RoutesHeader } from "./RoutesHeader"

export const RoutesBlog = () => {
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
            Map: '/MapHumbold.jpg'

        }
    ]


    return (
        <section className="w-full flex flex-col items-center bg-gray-800">
            <RoutesHeader />
            {
                INFOROUTES.map((item, index) => (
                    <article key={index} className="flex flex-col items-center justify-center bg-gray-900 w-[900px] h-full p-6 text-gray-100">
                        <h2 className=" self-start font-bold text-3xl mb-6">{item.Name}</h2>
                        <img className="row-span-2 rounded-lg mb-8" src={item.Map} alt={`Map ${item.Name}`} />

                        <p className="font-light text-lg text-pretty mb-6">{item.Description}</p>

                        <div className="flex w-full border-b-2 pb-6 rounded justify-center gap-2 mt-2 text-xl mb-6">
                            <div className="border-r-2 pr-2">
                                <div>
                                    <span>Distancia: {item.Distance}</span>
                                </div>
                                <div>
                                    <span>Desnivel Positivo: {item.PosSlope}</span>
                                </div>
                                <div>
                                    <span>Desnivel Negativo: {item.NegSlope}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Dificultad Técnica: {item.Difficulty}</span>
                                </div>
                                <div>
                                    <span>Altitud Máxima: {item.MaxAltitude}</span>
                                </div>
                                <div>
                                    <span>Altitud Mínima: {item.MinAltitude}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}
