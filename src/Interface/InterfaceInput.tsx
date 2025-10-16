export interface inputInterface {
  label: string
  name: string
  type: "text" | "email" | "password" | "textarea" | "radio"|"button"
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
 onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  options?: {
    [x: string]: string, label: string; value: string 
}[] // uniquement pour les radios
}



export interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}