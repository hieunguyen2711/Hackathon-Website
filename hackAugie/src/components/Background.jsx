import "./bg.css";
import parchment from "../assets/imgs/parchment.png";

export default function Parchment({ children }) {
  return (
    <div
      className="parchment"
      style={{ backgroundImage: `url(${parchment})` }}
    >
      <div className="parchment-content">
        {children}
      </div>
    </div>
  );
}
