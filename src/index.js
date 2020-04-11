// 👉 Importing npm libs from node_modules folder (see package.json)
import React from 'react'                 // to make components
import { render } from 'react-dom'        // to append a React tree to the DOM
import { string, bool } from 'prop-types' // to perform validation of props (optional)

// 👉 Importing a component from another file
import RockPaperScissors from './components/RockPaperScissors'


/*
💥💥💥 A- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 A- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 A- Example of a React component `Greet` being DECLARED 💥💥💥

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
function Greet({ name, emphasis }) { // takes data => returns element
  return (
    <h2 id={`greet${name}`}>
      Hello, {name}!
      It&apos;s {emphasis && 'SO'} good to see you!
    </h2>
  )
}
Greet.propTypes = { // validation
  name: string.isRequired,
  emphasis: bool,
}


/*
💥💥💥 B- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 B- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 B- Examples of `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax

  <Greet name='Ian' emphasis />              // props are { name: 'Ian', emphasis: true }
  <Greet name='Michael' emphasis={false} />  // props are { name: 'Michael', emphasis: false }
  <Greet name='Sarah' />                     // props are { name: 'Sarah' }
*/


/*
💥💥💥 C- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 C- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 C- Mounting a React element to the DOM (only once per app) 💥💥💥
*/
render(
  // 👉 1st ARG - element (usually a component "invoked"):
  // <Greet name='Michael' emphasis={false} />,
  <RockPaperScissors player='Michael' />,

  // 👉 2nd ARG - DOM element to append to:
  document.querySelector('#root')
)
