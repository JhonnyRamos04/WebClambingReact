export const Header = () => {
    return (
        <header class='text-gray-800'>
            <div
                class='py-2 px-2 md:px-10 flex items-center fixed backdrop-blur-sm shadow-lg shadow-slate-900/5 top-0 w-full justify-between md:justify-around z-30'
            >
                <span
                    class='filter drop-shadow-md font-black text-3xl flex justify-center items-center'
                >
                    TheClimb <Mountain />
                </span>
                <nav>
                    <ul
                        class='hidden md:flex text-sm max-sm:text-xs [&>li>a]:font-medium [&>li>a]:mx-1 [&>li>a]:px-2 [&>li>a]:py-4 [&>li>a]:inline-block'
                    >
                        <li>
                            <a class='hover:underline' href='/'>Inicio</a>
                        </li>
                        <li>
                            <a class='hover:underline' href='#'>Sobre Nosotros</a>
                        </li>
                        <li>
                            <a class='hover:underline' href='#'>Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div class='hidden md:block'>
                    <HeroLink>Inscribite Ya</HeroLink>
                </div>
            </div>
            <div class='fixed z-30 right-0 top-1'>
                <ToggleButton />
            </div>
            <div
                class='fixed w-screen bg-gray-100 backdrop-blur h-0 top-0 right-0 z-20 transition-all ease-in-out duration-500 overflow-y-hidden'
                id='menu-pop'
            >
                <ul
                    class='text-gray-800 mt-8 font-bold [&>li]:px-4 [&>li]:py-2 [&>li]:w-full flex h-full py-10 justify-start items-center flex-col gap-y-4 text-2xl'
                >
                    <li class='hover:text-gray-600 transition duration-200'>
                        <a href=''></a>Inicio
                    </li>
                    <li class='hover:text-gray-600 transition duration-200'>
                        <a href=''></a>Sobre Nosotros
                    </li>
                    <li class='hover:text-gray-600 transition duration-200'>
                        <a href=''></a>Contacto
                    </li>
                </ul>
            </div>

            <script>
                const toggleButton = document.querySelector('#checkbox')
                const menu = document.querySelector('#menu-pop')

    toggleButton.addEventListener('click', () => {
                    menu.classList.toggle('h-0')
      menu.classList.toggle('h-[300px]')
    })
            </script>
        </header>
    )
}

