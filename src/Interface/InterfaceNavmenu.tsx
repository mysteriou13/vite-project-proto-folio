
export interface baselink  {   
    name: string;
    address: string;
    typelink?:string
    id?:string,
}
/*link nav */
 export interface LinkNav extends baselink {
   _id?:string
  };

  export interface ItemsState  {
    data: LinkNav[];
  };


// add nav navLink
export interface NavDataLink extends baselink {
_id?:string,

};

export interface AddNavLinkArgs {
  dataform?: NavDataLink  // le lien à ajouter, peut être partiel
  token?: string                  // token d'authentification
   id?:string
}

// Réponse du backend pour lire tous les navLinks
// Si le backend renvoie seulement un tableau, on peut juste faire :
export type NavMenuResponse = [];


