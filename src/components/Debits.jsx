import React from "react";

const Debits = ({ debits, setDebits, accountsBalance }) => {

    return (
        <div className="debitsDiv">
            <title>
                Debits
            </title>
            <h1>Debits Amount</h1>
            <h2>{debits}</h2>
            <form onSubmit={e => {
                    e.preventDefault();
                    const { debits: newDebits } = e.target
                    setDebits(debits + parseInt(newDebits.value));
                }}>
                <input type="text" name="debits" placeholder="Add Debits"/>
                <button type="submit">Add</button>
            </form>
            <h1>Accounts Balance</h1>
            <h2>{accountsBalance}</h2>
        </div>
    )
}

export default Debits;