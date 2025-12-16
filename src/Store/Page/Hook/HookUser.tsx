import { useAppDispatch } from "../../hook";
import { setLogin, setRoleUser } from "../Slice/LoginSlice";
import { useLoginUserMutation } from "../api/ApiUser";
import { LoginRequest,LoginResponse} from "../../Interface/interfaceUse";

/*hook login user*/
export function useLogin() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const login = async (credential: LoginRequest) => {
    try {
    const result:LoginResponse = await loginUser(credential).unwrap()

      if (result.connection) {
        dispatch(setLogin(true));
        dispatch(setRoleUser(result.role));
      }

      return result;
    } catch (err) {
      console.error("Erreur de connexion :", err);
      throw err; // pour que le composant puisse gérer l'erreur
    }
  };

  return {
    login,
    isLoading,
    error,
  };
}


