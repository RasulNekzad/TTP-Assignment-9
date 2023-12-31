import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [debits, setDebits] = useState(0);
  const [credits, setCredits] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [debitsDescription, setDebitsDescription] = useState("");
  const [creditsDescription, setCreditsDescription] = useState("");

  async function fetchDebits() {
    const result = await axios.get(
      "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
    );
    setDebits(result.data);
  }

  async function fetchCredits() {
    const result = await axios.get(
      "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
    );
    setCredits(result.data);
  }

  useEffect(() => {
    fetchDebits();
  }, []);
  useEffect(() => {
    fetchCredits();
  }, []);

  const updateAccountBalance = () => {
    setAccountBalance(credits - debits);
  };

  useEffect(() => {
    updateAccountBalance();
  }, [credits, debits]);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/debits"
            element={
              <Debits
                debits={debits}
                accountsBalance={accountBalance}
                setDebits={setDebits}
                debitsDescription={debitsDescription}
                setDebitsDescription={setDebitsDescription}
              />
            }
          ></Route>
          <Route
            path="/credits"
            element={
              <Credits
                credits={credits}
                accountsBalance={accountBalance}
                setCredits={setCredits}
                creditsDescription={creditsDescription}
                setCreditsDescription={setCreditsDescription}
              />
            }
          ></Route>
          <Route
            path="/*"
            element={
              <Home
                debits={debits}
                credits={credits}
                accountBalance={accountBalance}
                debitsDescription={debitsDescription}
                creditsDescription={creditsDescription}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
