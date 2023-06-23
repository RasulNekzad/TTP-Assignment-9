import React from "react";

const Home = ({ debits, credits, accountBalance, debitsDescription, creditsDescription }) => {
    
    return (
        <div>
            <h1>Welcome to the Bank of React!</h1>
            <h1>Your current account balance is:</h1>
            <h2>{accountBalance}</h2>
            <h1>Debits Amount</h1>
            <h2>{debits}</h2>
            {debitsDescription!=="" && <h3>Most recent transaction:<br></br> {debitsDescription}</h3>}
            <h1>Credits Amount</h1>
            <h2>{credits}</h2>
            {creditsDescription!=="" && <h3>Most recent transaction:<br></br> {creditsDescription}</h3>}
        </div>
    )
}

export default Home;