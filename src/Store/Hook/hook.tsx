// src/app/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../Store/store'

// Hook pour dispatch avec typage automatique
export const useAppDispatch: () => AppDispatch = useDispatch

// Hook pour selector avec typage automatique
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
