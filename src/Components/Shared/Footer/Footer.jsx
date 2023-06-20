import { FaReact, FaGithub, FaLinkedin, FaHome, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-20 text-white">
            <div className="container mx-auto py-4 flex flex-wrap items-center justify-between">
                <div className="flex flex-col items-center justify-center text-center  w-[200px]">
                    <div className='flex items-center'>
                        <FaReact className="text-2xl mr-2" />
                        <span className="text-lg font-semibold">React Developer</span>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <FaHome className='text-lg' />
                        <span className="text-sm font-semibold">Dhaka Bangladesh</span>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <FaPhone className='text-lg' />
                        <span className="text-sm font-semibold ">What&apos;s App: +8801750561063</span>
                    </div>


                </div>
                <div className="flex flex-col mt-2 md:mt-0">

                    <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="mr-4 hover:text-gray-300">Terms of Service</a>

                    <div className="flex items-center">
                        <a href="#" className="text-gray-300 hover:text-white mr-2">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                    <p className="mr-4">© 2023 React Developer</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
