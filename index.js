import React from 'react'
import { render } from 'react-dom'
import RockPaperScissors from './components/RockPaperScissors'

render(
  <RockPaperScissors player='Michael' />,
  document.querySelector('#root')
)
