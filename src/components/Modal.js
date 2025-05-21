import React from 'react'

export default function Modal({ isCorrect, solution, turn, handlePlayAgain }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)]
              }} />
            ))}
          </div>
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
