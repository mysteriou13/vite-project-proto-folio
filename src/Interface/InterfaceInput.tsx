export interface inputInterface {

  label:string,
  name:string,
  type:string,
  value:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}



export interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}