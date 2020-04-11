import React, { useState } from 'react'
import { string } from 'prop-types'

const weapons = ['🗿', '📜', '✂️']
const [rock, paper, scissors] = weapons

export default function RockPaperScissors({ player }) {
  const [message, setMessage] = useState('')
  const [rounds, setRounds] = useState(1)
  const [wins, setWins] = useState(0)
  const [ties, setTies] = useState(0)

  const play = event => {
    const weapon = event.target.name
    const weaponComputer = weapons[Math.floor(Math.random() * 3)]

    if (
      (weapon === rock && weaponComputer === paper) ||
      (weapon === paper && weaponComputer === scissors) ||
      (weapon === scissors && weaponComputer === rock)
    ) {
      setMessage(`You: ${weapon}. Computer: ${weaponComputer}. You lose!`)
    } else if (
      (weapon === rock && weaponComputer === scissors) ||
      (weapon === paper && weaponComputer === rock) ||
      (weapon === scissors && weaponComputer === paper)
    ) {
      setMessage(`You: ${weapon}. Computer: ${weaponComputer}. You win!`)
      setWins(wins + 1)
    } else {
      setMessage(`You: ${weapon}. Computer: ${weaponComputer}. It's a tie.`)
      setTies(ties + 1)
    }

    setRounds(rounds + 1)
  }

  return (
    <div className='rock-paper-scissors'>
      <div className='player'>Welcome, {player}</div>

      <h2>Current Round: {rounds}</h2>
      <h3>won: {wins} | lost: {rounds - wins - ties - 1} | tied: {ties}</h3>

      <h1 className='message'>{message || 'FIGHT!'}</h1>

      <div className='buttons'>
        <h3>Choose wisely:</h3>
        <div>
          <button onClick={play} name={rock}>{rock}</button>
          <button onClick={play} name={paper}>{paper}</button>
          <button onClick={play} name={scissors}>{scissors}</button>
        </div>
      </div>
    </div>
  )
}

RockPaperScissors.propTypes = {
  player: string,
}
