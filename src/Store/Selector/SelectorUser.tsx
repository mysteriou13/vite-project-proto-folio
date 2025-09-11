// src/app/hooks.ts ou src/hooks/useAuth.ts
import { useAppSelector } from '../hook'

export function useAuth() {
  const {login ,role}= useAppSelector(state => state.login)

  
  return { login, role }
}
