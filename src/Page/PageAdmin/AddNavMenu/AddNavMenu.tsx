
import FormLinkNavMenu from "../../../Componement/From/Admin/FromLinkNavMenu/FormLinkNavMenu";
import { useAddNavLinkMutation } from "../../../Store/api/ApiNavMenu";

export default function AddNavMenu() {
  const [addNavLink] = useAddNavLinkMutation();
  return (
    <div>
  <FormLinkNavMenu NavLink={addNavLink} title={"Ajouter lien au menu de navigation"} name={""} address={""} typelink={undefined} id={""} />
    </div>
  )
}
