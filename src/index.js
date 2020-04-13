// 👉 Importing React libs from node_modules folder (see package.json)
import React from 'react'                 // to make React components
import { render } from 'react-dom'        // to append a React tree of components to the DOM
import { string, bool } from 'prop-types' // to perform validation of props (optional)

// 👉 Importing a React component from another file
import RockPaperScissors from './components/RockPaperScissors'

// 👉 Importing a React component from node_modules
import Bulb from '@ladrillo/lightbulb'


/*
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
*/
render(
  // 👉 1st ARG - React element (or React component "invoked"):
  <div>Hello, World!</div>,
  // 👉 2nd ARG - DOM element to append to:
  document.querySelector('#root')
)


/*
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥

  - Name is capitalized
  - Takes an object ("props") as its only argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components (h1, div, etc)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 expressions 🔥 using curly braces
  - We can interpolate attribute values, and content
  - We can validate the props
*/
function Greet() { // takes data => returns element
  return null
}
Greet.propTypes = { // validation (optional but recommended)

}


/*
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

  <Greet name='Ian' emphasis />              // props are { name: 'Ian', emphasis: true }
  <Greet name='Michael' emphasis={false} />  // props are { name: 'Michael', emphasis: false }
  <Greet name='Sarah' />                     // props are { name: 'Sarah' }
*/
