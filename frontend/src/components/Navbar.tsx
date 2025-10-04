import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>            <div className="inner">
                <Link to="/" className="logo">
                    <div className="flex flex-row justify-center items-center gap-2">

                        <span>Fluenzy</span> <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shadow-lg'>.in</div>
                    </div>
                </Link>

                {/* Hamburger Menu for Small screens */}
                <button
                    className="sm:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>                {/* Desktop Navigation */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                {link.startsWith('/') ? (
                                    <Link to={link}>
                                        <span>{name}</span>
                                        <span className="underline"></span>
                                    </Link>
                                ) : (
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"></span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>                {/* Mobile Navigation */}
                {menuOpen && (
                    <nav className={`${scrolled ? 'bg-secondary' : 'bg-white'} sm:hidden absolute top-full left-0 w-full shadow-lg`}>
                        <ul className="flex flex-col gap-4 p-4">
                            {navLinks.map(({ link, name }) => (
                                <li key={name} className="group">
                                    {link.startsWith('/') ? (
                                        <Link to={link} className="block">
                                            <span>{name}</span>
                                        </Link>
                                    ) : (
                                        <a href={link} className="block">
                                            <span>{name}</span>
                                        </a>
                                    )}
                                </li>
                            ))}                            <li>
                            <Link to="/brand-onboarding">
                                    <span>Get started</span>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                )}                <div className="contact-btn group">

                    <Link to="/brand-onboarding">
                        <div className="inner">
                            <span className="group-hover:text-white transition-colors duration-300 flex items-center">Get started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 size-4"><path d="m9 18 6-6-6-6"></path></svg></span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;