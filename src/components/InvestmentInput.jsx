export default function InvestmentInput({
  onChangeInvestment,
  userInputValues,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputValues.initialInvestment}
            onChange={(e) =>
              onChangeInvestment("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInputValues.annualInvestment}
            onChange={(e) =>
              onChangeInvestment("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputValues.expectedReturn}
            onChange={(e) =>
              onChangeInvestment("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInputValues.duration.toString()}
            onChange={(e) => onChangeInvestment("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
