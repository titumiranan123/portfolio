import { FaReact } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <FaReact className="text-2xl mr-2" />
                    <span className="text-lg font-semibold">React Developer</span>
                </div>
                <div className="flex mt-2 md:mt-0">
                    <p className="mr-4">© 2023 React Developer</p>
                    <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
