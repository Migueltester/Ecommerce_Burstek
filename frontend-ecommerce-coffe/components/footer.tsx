const Footer = () => {
    return ( 

        

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-16" alt="Burstek" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Burstek</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-semibold text-gray-800 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Sobre nosotros</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Cafes</a>
                </li>
                
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Burstek™</a>. All Rights Reserved.</span>
    </div>
</footer>


     );
}
 
export default Footer ;