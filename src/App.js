import React from 'react'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Wordle from './components/Wordle'
import Rules from './components/Rules'

function App() {
  const [solution, setSolution] = useState(null)
  const [error, setError] = useState(null)
  
  const getNewWord = () => {
    const API_URL = window.location.hostname === 'localhost' 
      ? 'http://localhost:3001'
      : 'https://wordle-game-backend.onrender.com';

    fetch(`${API_URL}/solutions`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch words')
        }
        return res.json()
      })
      .then(json => {
        if (!Array.isArray(json) || json.length === 0) {
          throw new Error('Invalid word list received')
        }
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        if (!randomSolution || !randomSolution.word) {
          throw new Error('Invalid word selected')
        }
        setSolution(randomSolution.word)
        setError(null)
      })
      .catch(err => {
        console.error('Error fetching word:', err)
        setError('Failed to load word. Please try again.')
      })
  }

  useEffect(() => {
    getNewWord()
  }, [])

  const handleNewGame = () => {
    getNewWord()
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Rules />
        <ThemeToggle />
        <h1>Wordle</h1>
        {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
        {solution && <Wordle solution={solution} handleNewGame={handleNewGame} />}
        <p style={{ textAlign: 'center' }}> Copyright &copy; --Nishan Jain !!!</p>
      </div>
    </ThemeProvider>
  )
}

export default App

