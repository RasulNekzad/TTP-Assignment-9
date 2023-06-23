import { React, useState, useEffect } from "react";

const Debits = ({ debits, setDebits, accountsBalance, debitsDescription, setDebitsDescription }) => {    

    return (
        <div className="debitsDiv">
            <title>
                Debits
            </title>
            <h1>Debits Amount</h1>
            <h2>{debits}</h2>
            {debitsDescription!=="" && <h3>{debitsDescription}</h3>}
            <form onSubmit={e => {
                    e.preventDefault();
                    const {debits: newDebits} = e.target;
                    setDebits(debits + Number(newDebits.value));
                    setDebitsDescription(`${e.target.description.value}: ${newDebits.value}`);
                }}>
                <input type="text" name="description" placeholder="Description" required/>
                <input type="text" name="debits" placeholder="Add Debits" required/>
                <button type="submit">Add</button>
            </form>
            <h1>Accounts Balance</h1>
            <h2>{accountsBalance}</h2>
        </div>
    )
}

export default Debits;