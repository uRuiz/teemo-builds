import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar'
import { useChampions } from './hooks/useChampions';
import './App.css'

function App() {

  const [champion, setChampion] = useState('');

  const {championsList} = useChampions();

  const handleInputChange = (event) => { 
    setChampion(event.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        IPAV'S TEEMO BUILDS
      </header>
      <main className="App-main">
        <SearchBar onChange={handleInputChange} championsList={championsList} />
      </main>
    </div>
  )
}

export default App
