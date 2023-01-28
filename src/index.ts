import { createContext, useContext } from "react";
import { snapShot } from "./file2";

export interface State {
  value: any;
}

type ContextType = ReturnType<typeof snapShot<State>>;
const Context = createContext<ContextType | null>(null);

export function useStateContext() {
  return useContext(Context);
}
