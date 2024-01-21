import { formatter } from "../util/investment";

export default function Result({ resultData }) {
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capitol</th>
        </tr>
      </thead>
      {resultData.map((data) => {
        const totalInterest =
          data.valueEndOfYear -
          data.annualInvestment * data.year -
          initialInvestment;

        const investedCapital = data.valueEndOfYear - totalInterest;

        return (
          <tbody key={data.year} className="center">
            <tr>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
