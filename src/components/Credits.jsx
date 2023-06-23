import React from "react";

const Credits = ({
  credits,
  accountsBalance,
  setCredits,
  creditsDescription,
  setCreditsDescription,
}) => {
  return (
    <div className="creditsDiv">
      <title>Credits</title>
      <h1>Credits Amount</h1>
      <h2>{credits}</h2>
      {creditsDescription !== "" && <h3>{creditsDescription}</h3>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { credits: newCredits } = e.target;
          setCredits(credits + Number(newCredits.value));
          setCreditsDescription(
            `${e.target.description.value}: ${newCredits.value}`
          );
        }}
      >
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input type="text" name="credits" placeholder="Add Credits" required />
        <button type="submit">Add</button>
      </form>
      <h1>Account Balance</h1>
      <h2>{accountsBalance}</h2>
    </div>
  );
};

export default Credits;
