import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  const handlePlayAgain = () => {
    window.location.reload()
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          <button onClick={handlePlayAgain} className="play-again">Play Again</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={handlePlayAgain} className="play-again">Play Again</button>
        </div>
      )}
    </div>
  )
}
