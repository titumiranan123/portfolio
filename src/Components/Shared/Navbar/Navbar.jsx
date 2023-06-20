import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItem = <>
        <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            onClick={handleMenuToggle}
        >
            Home
        </NavLink>
        <NavLink
            to="/skills"
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            onClick={handleMenuToggle}
        >
            Skills
        </NavLink>
        <NavLink
            to="/about"
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            onClick={handleMenuToggle}
        >
            About
        </NavLink>
        <NavLink
            to="/contact"
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
            onClick={handleMenuToggle}
        >
            Contact
        </NavLink>
    </>

    return (
        <nav className="flex items-center justify-between relative  bg-black p-6 py-4 px-10">
            <Link to='/' className="flex items-center flex-shrink-0  text-white mr-6">
                <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            </Link>
            <div className='lg:flex text-xl font-bold hidden pe-10'>
                {navItem}

            </div>
            {
                isMenuOpen && <div className='absolute top-12 right-4 bg-black p-16 text-xl font-bold z-40'>
                    {navItem}
                </div>
            }

            <div className="lg:hidden">
                {isMenuOpen ? (
                    <RiCloseLine
                        className="text-white cursor-pointer text-2xl"
                        onClick={handleMenuToggle}
                    />
                ) : (
                    <RiMenu3Line
                        className="text-white cursor-pointer text-2xl"
                        onClick={handleMenuToggle}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
