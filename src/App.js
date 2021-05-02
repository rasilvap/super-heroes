import React from 'react'

import Text from './components/atoms/Text'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Text variant="title">Superheroes</Text>
        </div>

        <Text color="black">Ver personajes</Text>

        <Text>Default text component</Text>
      </header>
    </div>
  )
}

export default App
