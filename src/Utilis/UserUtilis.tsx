// 📁 src/Hooks/useLoginSubmit.ts
import { LoginResponse } from "../Interface/interfaceUse";
import { useApiData } from "./CallApi";
import { useAppDispatch } from "../Store/Hook/hook";
import { setLogin, setRoleUser, setToken } from "../Store/Slice/LoginSlice";

export function User() {
  const dispatch = useAppDispatch();
  const { handleRequest } = useApiData();

  const LoginUser = async (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    password: string
  ) => {
    e.preventDefault();

    try {
      const result: LoginResponse = await handleRequest(
        "/user/login",
        "POST",
        "",
        { name, password }
      );

      if (result.connection) {
        dispatch(setLogin(true));
        dispatch(setRoleUser(result.role));
        dispatch(setToken(result.token));
      }
    } catch (error) {
      console.error(" error connection :", error);
    }
  };

  
     const InscriptionUser = async (
       e: React.FormEvent<HTMLFormElement>,
    name: string,
    password: string,
    role:string
     ) => {
    e.preventDefault();

       const result = await handleRequest(
            "/user/inscription",
            "POST",
            "",
            { name, password,role }
          );



    if (result) {
      console.log("Utilisateur inscrit :", result);
    }
  };


  return { LoginUser,InscriptionUser };
}
