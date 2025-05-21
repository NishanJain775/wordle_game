import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution, handleNewGame }) {
  const { 
    currentGuess, 
    guesses, 
    turn, 
    isCorrect, 
    usedKeys, 
    handleKeyup, 
    resetGame,
    addLetter,
    deleteLetter,
    submitGuess
  } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  useEffect(() => {
    resetGame()
  }, [solution])

  const handlePlayAgain = () => {
    setShowModal(false)
    resetGame()
    handleNewGame()
  }

  const handleKeypadClick = (key) => {
    if (key === 'Enter') {
      submitGuess()
    } else if (key === 'Backspace') {
      deleteLetter()
    } else {
      addLetter(key)
    }
  }

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} handleClick={handleKeypadClick} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} handlePlayAgain={handlePlayAgain} />}
    </div>
  )
}
