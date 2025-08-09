// src/app/hooks.ts ou src/hooks/useAuth.ts
import { useAppSelector } from './hook'

export function useAuth() {
  const isLoggedIn = useAppSelector(state => state.login.login)
  const role = useAppSelector(state => state.login.role)

  return { isLoggedIn, role }
}
