export interface inputInterface {

  label:string,
  name:string,
  type:string,
  value:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
