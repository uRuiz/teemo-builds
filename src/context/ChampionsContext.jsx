import { createContext, useState } from 'react';
import { data } from '../data/data';

export const ChampionsContext = createContext();

const ChampionsContextProvider = ({ children }) => {

  const [champions] = useState(data);

  return (
    <ChampionsContext.Provider value={{champions}}>
      {children}
    </ChampionsContext.Provider>
  );
};

export default ChampionsContextProvider;