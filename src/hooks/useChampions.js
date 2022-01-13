import { useContext } from "react";
import { ChampionsContext } from "../context/ChampionsContext";

export const useChampions = () => { 
  
  const ctx = useContext(ChampionsContext);

  return {
    ...ctx
  };
}