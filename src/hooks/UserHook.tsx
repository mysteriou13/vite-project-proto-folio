// 📁 src/Hooks/useLoginSubmit.ts
import { useNavigate } from "react-router";
import { LoginResponse } from "../Interface/interfaceUse";
import { useApiData } from "./CallApi";
import { useAppDispatch } from "../Store/Hook/hook";
import { setLogin, setRoleUser, setToken } from "../Store/Slice/LoginSlice";

export function User() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
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
        
        localStorage.setItem("token",result.token);
        localStorage.setItem("role",result.role);

        dispatch(setLogin(true));
        dispatch(setRoleUser(result.role));
        dispatch(setToken(result.token));
        navigate("/")
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
