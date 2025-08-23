// InterfaceNavmenu.ts


// Formulaire pour ajouter un navLink
export type NavDataLink = {
  name: string;
  address: string;
  typelink: "default" | "user" | "admin" |"visibleuserconnecter"|"invisibleuserconnect"|"visibleadminconnect";
};

// Réponse du backend pour lire tous les navLinks
// Si le backend renvoie seulement un tableau, on peut juste faire :
export type NavMenuResponse = [];


