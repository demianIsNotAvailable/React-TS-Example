import { useContext } from "react";
import { CountContext } from "./CountContext";

export default function Header() {
    const { count } = useContext(CountContext)

  return <h1>{count}</h1>;
}
