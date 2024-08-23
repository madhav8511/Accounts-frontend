import City from "./components/City";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";
import Account from "./components/Account";
import Cityaccount from "./components/Cityaccount";
import Bill from "./components/Bill";
import Image from "./components/Image";
import About from "./components/About";

function App() {
  return (
    <> 
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/bills" element={<Bill></Bill>}></Route>
              <Route path="/accounts" element={<Account></Account>}></Route>
              <Route path="/city" element={<City></City>}></Route>
              <Route path="/city-view" element={<Cityaccount></Cityaccount>}></Route>
              <Route path="/transaction" element={<Transaction></Transaction>}></Route>
              <Route path="/image" element={<Image></Image>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
