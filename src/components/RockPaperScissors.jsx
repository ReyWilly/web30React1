import React, { useState } from 'react'
import { string } from 'prop-types'
import Bulb from '@ladrillo/lightbulb'

const weapons = ['🗿', '📜', '✂️']
const [rock, paper, scissors] = weapons

export default function RockPaperScissors({ player }) {
  const [message, setMessage] = useState('')
  const [rounds, setRounds] = useState(1)
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)

  const play = event => {
    const weapon = event.target.name
    const weaponComputer = weapons[Math.floor(Math.random() * 3)]

    if (
      (weapon === rock && weaponComputer === paper) ||
      (weapon === paper && weaponComputer === scissors) ||
      (weapon === scissors && weaponComputer === rock)
    ) {
      setLosses(losses + 1)
      setMessage(`You: ${weapon}. They: ${weaponComputer}. You lose!`)
    } else if (
      (weapon === rock && weaponComputer === scissors) ||
      (weapon === paper && weaponComputer === rock) ||
      (weapon === scissors && weaponComputer === paper)
    ) {
      setWins(wins + 1)
      setMessage(`You: ${weapon}. They: ${weaponComputer}. You win!`)
    } else {
      setMessage(`You: ${weapon}. They: ${weaponComputer}. It's a tie.`)
    }

    setRounds(rounds + 1)
  }

  return (
    <div className='rock-paper-scissors'>
      <div className='player'>Welcome, {player}</div>

      <h2>Round: {rounds}</h2>
      <Bulb color={wins >= losses ? '#4ec5ff' : 'red'} on size={100} />

      <h3>won: {wins} | lost: {losses} | tied: {rounds - 1 - wins - losses}</h3>

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
  player: string.isRequired,
}
