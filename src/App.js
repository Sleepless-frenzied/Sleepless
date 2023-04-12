import './App.css';

//import Navbar from './components/test/Navbar/Navbar';

import Navbar from './components/navbar';
import Sleepless from "./pages/Sleepless";
import Monumap from "./pages/Applications/Monumap";
import Coven from "./pages/Games/Coven";
import Loading from "./pages/Games/Loading";
import AboutUs from "./pages/Miscellaneous/AboutUs";
import Portfolio from "./pages/Portfolio";

import { Routes, Route} from "react-router-dom";

import Nav from "./components/test/nav"



function App() {
    return (
        <div className="App">
            <Navbar/>



            <Routes >
                <Route path="/" element={<Sleepless/>} />
                <Route path="/Monumap" element={<Monumap/>} />
                <Route path="/Coven" element={<Coven />} />
                <Route path="/Loading" element={<Loading />} />
                <Route path="/AboutUs" element={<AboutUs />} />

                <Route path="/Portfolio" element={<Portfolio />} />

            </Routes>


        </div>
    );
}

export default App;
