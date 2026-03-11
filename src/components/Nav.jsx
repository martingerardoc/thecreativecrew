function Nav() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
            <h2 className=" font-bold text-lg">
                Team Page
            </h2>

            <ul className="flex gap-6">
                <li className="cursor-pointer hover:text-gray-300">Home</li>
                <li className="cursor-pointer hover:text-gray-300">About</li>
                <li className="cursor-pointer hover:text-gray-300">Contact</li>
            </ul>

        </nav>
    )
}

export default Nav