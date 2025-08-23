import { useAppSelector } from '../hook'

export function navSelector(){

      const { items, loading, error } = useAppSelector(state => state.navMenuSlice);

     return {items};
}