// We need the state hook
import React from 'react'
import { string } from 'prop-types'


// These constants could live in another module
const weapons = ['🗿', '📜', '✂️']

// It's less error-prone to work with variables than hard-coded constants
const [rock, paper, scissors] = weapons


export default function RockPaperScissors({ player }) {
  // 1- 👉👉👉 CREATE SLICES OF APPLICATION STATE (USING TOP-LEVEL COMPONENT STATE)

  // We need several slices of state, to keep track of:
  //   - the number of rounds played
  //   - the number of rounds won
  //   - the number of rounds lost
  //   - the MESSAGE displayed on the screen

  // 2- 👉👉👉 We DO NOT need a slice for rounds tied, as we can calculate that info using other slices


  // 2- 👉👉👉 REPLACE IN THE JSX THE HARD CODED PIECES OF DATA WITH PIECES OF STATE


  // 3- 👉👉👉 ATTACH IN THE JSX A CLICK HANDLER THAT UPDATES STATE ON USER INTERACTION


  const play = event => {
    // 4- 👉👉👉 IMPLEMENT THE 'play' HANDLER!

    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔

    // A- update the round count

    // B- pull out which weapon the user selected from the event.target

    // C- generate a random number (0, 1, 2) to select a weapon for the computer

    if (/* user LOSES */ null) {
      // - update the losses
      // - update the message

    } else if (/* user WINS */ null) {
      // - update the wins
      // - update the message

    } else /* it's a TIE */ {
      // - update the message
    }
  }

  return (
    <div className='rock-paper-scissors'>
      <div className='player'>Welcome, {player}</div>

      <h2>Round: 1</h2>

      <h3>won: 1 | lost: 0 | tied: 0</h3>

      <h1 className='message'>You: 🗿, they: ✂️. You Win!</h1>

      <div className='buttons'>
        <h3>Choose wisely:</h3>
        <div>
          <button name={rock}>{rock}</button>
          <button name={paper}>{paper}</button>
          <button name={scissors}>{scissors}</button>
        </div>
      </div>
    </div>
  )
}

RockPaperScissors.propTypes = { // OPTIONAL (but nice)
  player: string.isRequired,
}

// STRETCH- 👉👉👉 ADD A RESTART BUTTON, ANYTHING YOU CAN IMAGINE, BRING OTHER COMPONENTS...
