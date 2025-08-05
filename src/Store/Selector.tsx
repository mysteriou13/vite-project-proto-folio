// features/login/loginSelectors.ts
import { RootState } from '../Store/store'

export const selectIsLoggedIn = (state: RootState) => state.login.login 
export const selectRole = (state: RootState) => state.login.role
