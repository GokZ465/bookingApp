import { useContext } from "react";
import AppContext from "../firebase/AppContext";

export default function FormChange() {
  const context = useContext(AppContext);
  context.showForm(!context.form);
}
