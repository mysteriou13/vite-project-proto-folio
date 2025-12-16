import LinkAdmin from "../LinkAdmin/LinkAdmin"

/*  liste odf link in menu admin */
export default function ListeNavMenuAdminMenu({nameclass} : {nameclass:string}) {
  
  return (
<div className={nameclass}>
          <div>
            <LinkAdmin link="/admin/" name="home admin"/>        
        </div>

        <div>
            <LinkAdmin link="/admin/adminNavmenu" name="menu de navigation"/>        
        </div>

         <div>
            <LinkAdmin link="/admin/project/AdminProject" name="Project"/>        
        </div>

    </div>
  )
}
