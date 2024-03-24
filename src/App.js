import City from "./components/City";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";
import Account from "./components/Account";
import Cityaccount from "./components/Cityaccount";

function App() {
  return (
    <> 
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/accounts" element={<Account></Account>}></Route>
              <Route path="/city" element={<City></City>}></Route>
              <Route path="/city-view" element={<Cityaccount></Cityaccount>}></Route>
              <Route path="/transaction" element={<Transaction></Transaction>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
