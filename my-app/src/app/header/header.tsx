const Header = () => {
    return(
        <header className="p-4 bg-black">
            <div>
                <nav>
                    <ul className="flex justify-evenly gap-12 p-4 font-serif font-bold text-2xl text-white">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#service">Service</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;