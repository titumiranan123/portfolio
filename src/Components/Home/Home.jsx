import { Helmet } from "react-helmet";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Md Titumir Anan</title>
            </Helmet>
            <Header />

        </div>
    );
};

export default Home;