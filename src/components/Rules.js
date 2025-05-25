import React, { useState } from 'react'

const Rules = () => {
  const [showRules, setShowRules] = useState(false)

  return (
    <>
      <button 
        className="rules-button"
        onClick={() => setShowRules(true)}
        aria-label="Show game rules"
      >
        <span className="rules-icon">📖</span>
        <span className="rules-text">Rule Book</span>
      </button>

      {showRules && (
        <div className="rules-modal">
          <div className="rules-content">
            <h2>How to Play</h2>
            <div className="rules-grid">
              <div className="rule-item">
                <span className="rule-number">1</span>
                <p>Guess the word in 6 tries</p>
              </div>
              <div className="rule-item">
                <span className="rule-number">2</span>
                <p>Each guess must be a valid 5-letter word</p>
              </div>
              <div className="rule-item">
                <span className="rule-number">3</span>
                <p>Color of tiles will change to show how close your guess was:</p>
                <div className="example-tiles">
                  <div className="example-tile green">W</div>
                  <p>Letter is correct and in right spot</p>
                  <div className="example-tile yellow">I</div>
                  <p>Letter is in the word but wrong spot</p>
                  <div className="example-tile grey">N</div>
                  <p>Letter is not in the word</p>
                </div>
              </div>
            </div>
            <button 
              className="close-rules"
              onClick={() => setShowRules(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Rules 