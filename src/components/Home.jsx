import React from "react";

const Home = ({ debits, credits, accountBalance }) => {
    
    return (
        <div>
            <h1>Welcome to the Bank!</h1>
            <h1>Your current account balance is:</h1>
            <h2>{accountBalance}</h2>
            <h1>Debits Amount</h1>
            <h2>{debits}</h2>
            <h1>Credits Amount</h1>
            <h2>{credits}</h2>
        </div>
    )
}

export default Home;