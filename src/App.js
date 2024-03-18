import City from "./components/City";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pilibangan from "./components/Pilibangan";
import Transaction from "./components/Transaction";
import Hanumangarh from "./components/Hanumangarh";
import Ganganagar from "./components/Ganganagar";

function App() {
  return (
    <> 
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/city" element={<City></City>}></Route>
              <Route path="/pilibangan" element={<Pilibangan></Pilibangan>}></Route>
              <Route path="/hanumangarh" element={<Hanumangarh></Hanumangarh>}></Route>
              <Route path="/ganganagar" element={<Ganganagar></Ganganagar>}></Route>
              <Route path="/transaction" element={<Transaction></Transaction>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
