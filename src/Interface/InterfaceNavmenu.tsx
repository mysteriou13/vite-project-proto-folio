
/*link nav */
 export type LinkNav = {
    _id: string;
    name: string;
    address: string;
    typelink: string;
  };

  export type ItemsState = {
    data: LinkNav[];
  };


// add nav navLink
export type NavDataLink = {
  name: string;
  address: string;
  typelink: "default" | "user" | "admin" |"visibleuserconnecter"|"invisibleuserconnect"|"visibleadminconnect";
};



// Réponse du backend pour lire tous les navLinks
// Si le backend renvoie seulement un tableau, on peut juste faire :
export type NavMenuResponse = [];


