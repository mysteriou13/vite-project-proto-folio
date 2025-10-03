
interface inputRadio {
   label:string,
  name: string
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputRadio({label,name,value,checked,onChange}:inputRadio) {
  return (
    <div>
         {label}<input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
                    />
    </div>
  )
}
