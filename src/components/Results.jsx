import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Results({ userInputValues }) {
  const resultsData = calculateInvestmentResults(userInputValues);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            initialInvestment -
            result.annualInvestment * result.year;

          const totalInvestedAmount = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year} className="center">
              <td>{result.year}</td>
              <td>{formatter.format(totalInvestedAmount)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
