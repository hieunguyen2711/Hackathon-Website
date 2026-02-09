import "./bg.css";

export default function Parchment({ children }) {
  return (
    <div className="parchment">
      <div className="parchment-content">
        {children}
      </div>
    </div>
  );
}
