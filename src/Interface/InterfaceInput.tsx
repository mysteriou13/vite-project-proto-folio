export type inputInterface =
  | {
      label: string;
      name: string;
      type: string;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      label: string;
      name: string;
      type: "radio";
      value:any;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      options?: { label: string; value: string }[];
    };
export interface TextAreaProps {
  name:string
  value:string,
  onChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}