import { useAppSelector } from '../Hook/hook'

export function navSelector(){

      const { items, loading, error } = useAppSelector((state: { navMenuSlice: any; }) => state.navMenuSlice);

     return {items};
}