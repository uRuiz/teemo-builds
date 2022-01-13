import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar'
import './App.css'
import { useChampions } from './hooks/useChampions';

function App() {

  const [champion, setChampion] = useState('');

  const { champions } = useChampions();
  const championsSelectList = champions.map(champion => champion = { value: champion.champion, label: champion.champion })

  const handleInputChange = (event) => { 
    setChampion(event.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        IPAV'S TEEMO BUILDS
      </header>
      <main className="App-main">
        <SearchBar onChange={handleInputChange} championsList={championsSelectList}/>
      </main>
    </div>
  )
}

export default App
