import { createContext, useState } from 'react';
import { data } from '../data/data';

export const ChampionsContext = createContext();

const ChampionsContextProvider = ({ children }) => {

  const [champions] = useState(data);
  const championsList = champions.map(champion => champion = { value: champion.champion, label: champion.champion })

  return (
    <ChampionsContext.Provider value={{championsList}}>
      {children}
    </ChampionsContext.Provider>
  );
};

export default ChampionsContextProvider;