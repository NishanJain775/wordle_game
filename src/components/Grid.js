import React from 'react'

// components
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn, shake }) {
  return (
    <div className={shake ? 'shake' : ''}>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} /> 
      })}
    </div>
  )
}
