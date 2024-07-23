import logo from "../assets/a.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="money bags" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
