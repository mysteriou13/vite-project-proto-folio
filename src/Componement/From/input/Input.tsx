import "./input.css";
import type { inputInterface } from "../../../Interface/InterfaceInput";

export default function Input({ label, type, name, value, onChange }: inputInterface) {
  return (
    <div className="boxInput">
      <label>{label}</label>
      <input
        className="ClassinputConnection"
        type={type}
        name={name}
        value={value}
        onChange={onChange}  // ← ici tu relies bien au setter
        required
      />
    </div>
  );
}
