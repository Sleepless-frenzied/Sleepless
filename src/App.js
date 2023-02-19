import './App.css';

import Navbar from './components/navbar';
import Sleepless from "./pages/Sleepless";
import Monumap from "./pages/Applications/Monumap";
import Coven from "./pages/Games/Coven";

import { Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="" element={<Sleepless />} />
                <Route path="/Monumap" element={<Monumap/>} />
                <Route path="/Coven" element={<Coven />} />
            </Routes>
        </div>
    );
}

export default App;
