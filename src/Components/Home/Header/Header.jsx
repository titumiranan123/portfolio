import './Header.css';
const Header = () => {
    return (
        <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('your-background-image.jpg')" }}>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl text-white font-bold mb-4">Welcome to My Website</h1>
                <p className="text-2xl text-white mb-8">Discover amazing projects and get in touch!</p>
                <div className="flex">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">
                        Projects
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Contact
                    </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,202.7C274.3,213,343,235,411,234.7C480,235,549,213,617,186.7C685.7,160,754,128,823,128C891.4,128,960,160,1029,186.7C1097.1,213,1166,235,1234,208C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </header>
    );
};

export default Header;