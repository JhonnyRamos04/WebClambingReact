export const Why = () => {
    return (
        <section
            className='bg-gray-100 flex flex-col justify-center items-center p-8 gap-y-8'
        >
            <h2 className='text-gray-800 text-2xl font-bold mt-12'>
                ¿Por qué comenzar con la escalada?
            </h2>
            <div className='flex flex-wrap gap-x-4 gap-y-4 md:gap-y-0 p-4'>
                <Card number='1' title='Mejora de la resistencia' icon='mgc_fitness_fill'>
                    Conviértete en una máquina de resistencia con la escalada. La escalada no
                    solo trabaja tus brazos y piernas, sino que también fortalece tu core y
                    mejora tu equilibrio. Al enfrentar rutas cada vez más desafiantes,
                    desarrollarás una resistencia cardiovascular y muscular que te
                    sorprenderá.
                </Card>
                <Card number='2' title='Mejora de la elasticidad' icon='mgc_barbell_fill'
                >Gana flexibilidad y alcanza nuevas alturas. La escalada te obliga a
                    estirar y flexionar tus músculos de formas que nunca imaginaste, mejorando
                    tu flexibilidad y rango de movimiento. ¡Conviértete en más ágil y elástico
                    con cada ascenso!</Card
                >
                <Card number='3' title='Mejora de la concentración' icon='mgc_chess_fill'
                >Más allá de la fuerza física. La escalada es un deporte que desafía tanto
                    tu cuerpo como tu mente. Al aprender a controlar tus pensamientos y
                    emociones, desarrollarás una increíble concentración mental.</Card
                >
            </div>
        </section >
    )
}
