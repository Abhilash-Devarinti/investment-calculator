import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    intitalInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intital Investment</label>
          <input
            type="number"
            value={userInput.intitalInvestment}
            onChange={(event) => handleChange("intitalInvestment", event.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => handleChange("annualInvestment", event.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => handleChange("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
