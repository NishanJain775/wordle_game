import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys, handleClick }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])

  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
  ]

  return (
    <div className="keypad">
      {rows.map((row, i) => (
        <div key={i} className="keypad-row">
          {row.map(key => {
            const color = usedKeys[key]
            const isSpecialKey = key === 'Enter' || key === 'Backspace'
            return (
              <div 
                key={key} 
                className={`${color || ''} ${isSpecialKey ? 'special-key' : ''}`}
                onClick={() => handleClick(key)}
              >
                {key === 'Backspace' ? '⌫' : key}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
