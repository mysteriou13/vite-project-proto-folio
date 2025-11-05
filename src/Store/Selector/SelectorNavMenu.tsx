import { useAppSelector } from '../Hook/hook'

export function navSelector(){

      const { linknav, loading, error } = useAppSelector((state: { navMenuSlice: any; }) => state.navMenuSlice);

     return {linknav};
}