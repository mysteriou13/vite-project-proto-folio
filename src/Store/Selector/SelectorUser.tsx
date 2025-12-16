// src/app/hooks.ts ou src/hooks/useAuth.ts
import { useAppSelector } from '../Hook/hook'

export function useAuth() {
  const {login,role,token}= useAppSelector(state => state.login)

  return { login, role ,token}
}
