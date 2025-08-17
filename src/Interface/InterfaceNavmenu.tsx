
export type NavMenuResponse = {
  success: boolean;
  message: string;
};

export type FormData = {
  name: string;
  address: string;
  typelink: "default" | "user" | "admin";
};