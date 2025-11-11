// 📁 src/Hooks/useLoginSubmit.ts
import { LoginResponse } from "../Interface/interfaceUse";
import { useApiData } from "./CallApi";
import { useAppDispatch } from "../Store/Hook/hook";
import { setLogin, setRoleUser, setToken } from "../Store/Slice/LoginSlice";

export function useLoginSubmit() {
  const dispatch = useAppDispatch();
  const { handleRequest } = useApiData();

  const LoginSubmit = async (
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

  return { LoginSubmit };
}
