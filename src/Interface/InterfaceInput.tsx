export type inputInterface =
  | {
      label: string;
      name: string;
      type: "text" | "textarea";
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    }
  | {
      label: string;
      name: string;
      type: "radio";
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      options?: { label: string; value: string }[];
    };
