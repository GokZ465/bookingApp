import { useContext } from "react";
import AppContext from "../firebase/AppContext";

export const FormChange = () =>  {
  const context = useContext(AppContext);
  context.showForm(!context.form);
}
