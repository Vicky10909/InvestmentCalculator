import logo from "../assets/Investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Here should have a logo picture" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
