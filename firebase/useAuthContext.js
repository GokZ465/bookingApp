import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    console.log(context);
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }
  return context;
}
