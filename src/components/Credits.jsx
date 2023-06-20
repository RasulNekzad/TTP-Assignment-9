import React from "react";

const Credits = ({ credits, accountsBalance, setCredits }) => {
    
    return (
        <div className="creditsDiv">
            <title>
                Credits
            </title>
            <h1>Credits Amount</h1>
            <h2>{credits}</h2>
            <form onSubmit={e => {
                    e.preventDefault();
                    setCredits(credits + parseInt(e.target.credits.value));
                }}>
                <input type="text" name="credits" placeholder="Add Credits"/>
                <button type="submit">Add</button>
            </form>
            <h1>Account Balance</h1>
            <h2>{accountsBalance}</h2>
        </div>
    )
}

export default Credits;