import './Header.css';
import Typewriter from 'typewriter-effect';
import header from '../../../assets/bg.jpg'
import user from '../../../assets/user].jpg'
const Header = () => {
    return (
        <header className="bg-cover md:h-[800px]  bg-center  h-screen relative" style={{ backgroundImage: `url(${header})` }}>
            <div className='bg-style z-10'>
            </div>
            <div className="flex flex-col lg:flex-row  items-center lg:justify-between gap-36 md:gap-10 lg:gap-0 px-28 text-white h-full z-20 absolute top-0  w-full">
                <div>
                    <h1 className="text-5xl   text-white font-bold mb-4  w-full">
                        <span>Asalamualikum </span> <br />
                        I&apos;m a
                        <Typewriter
                            options={{
                                strings: ['Web Devloper', 'Java Script Devloper', 'Web Pentester', 'Ethical Hacker', ' Full Stack Developer', 'Frontend Engineer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className='text-sm text-gray-300'>
                        Passionate Full Stack Developer with expertise in JavaScript and React
                    </p>
                    <div className="flex mt-10">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">
                            Projects
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Contact
                        </button>
                    </div>
                </div>
                <div className=' w-[250px] relative'>
                    <div className="w-56 border-4 h-[26rem] border-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full ring-4 ring-purple-600 overflow-hidden transform rotate-45">
                    </div>
                    <img className='rounded-full h-96 absolute w-full top-1 ' src={user} alt="" />

                </div>

            </div>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,202.7C274.3,213,343,235,411,234.7C480,235,549,213,617,186.7C685.7,160,754,128,823,128C891.4,128,960,160,1029,186.7C1097.1,213,1166,235,1234,208C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

        </header>
    );
};

export default Header;