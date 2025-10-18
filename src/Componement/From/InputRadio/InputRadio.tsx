interface InputRadioProps {
  label: string;
  name: string;
  value?: string;
  selectedValue?: string; // valeur actuelle du state
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRadio({ label, name, value, selectedValue, onChange }: InputRadioProps) {
  return (
    <div>
      <label>
        {label}
        </label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={value === selectedValue} // ✅ checked dynamique
          onChange={onChange}
        />
      
    </div>
  );
}
