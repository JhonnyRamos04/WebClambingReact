import { QuestionsItems } from "./QuestionsItems"
export const Questions = () => {

    const QUESTIONS = [
        {
            Quest: '¿Qué es la escalada?',
            Content: ' La escalada es una actividad deportiva que consiste en ascender por paredes rocosas o artificiales, utilizando la fuerza física y técnicas específicas.'
        },
        {
            Quest: '¿Qué necesito para empezar a escalar?',
            Content: ' Para empezar a escalar, necesitarás lo básico: calzado de escalada, magnesio para las manos y un arnés. El gimnasio de escalada te proporcionará el resto del equipo necesario como cuerdas y aseguradores.'
        },
        {
            Quest: '¿Qué nivel físico necesito para empezar a escalar?',
            Content: ' ¡Cualquiera puede empezar a escalar! No necesitas estar en forma física para comenzar. La escalada es una actividad que se adapta a todos los niveles, y con la práctica irás mejorando tu fuerza y resistencia.'
        },
        {
            Quest: '¿Es segura la escalada?',
            Content: ' La escalada, cuando se practica correctamente, es un deporte seguro. En nuestros centros, todos los instructores están certificados y te enseñarán las técnicas adecuadas para escalar de forma segura. Además, contamos con todo el equipo de seguridad necesario.'
        },
        {
            Quest: '¿Qué tipos de escalada existen?',
            Content: ' Existen diversos tipos de escalada, como la escalada deportiva, la búlder, la escalada en hielo, entre otras. En nuestro centro nos enfocamos en la escalada deportiva, que se realiza en paredes artificiales con rutas de diferentes niveles de dificultad.'
        }
    ]

    return (
        <section className="relative h-screen bg-gray-800 overflow-hidden flex items-center flex-col text-gray-100">
            <h2 className="text-3xl font-bold my-12">Preguntas Frecuentes</h2>
            <div className="z-10" >
                {QUESTIONS.map((item, index) => (
                    <QuestionsItems key={index} {...item} />
                ))}
            </div>
            <img className="absolute -right-32 -rotate-12 " src="/HeroClambing.png" alt="HeroClambing" />


        </section>
    )
}
