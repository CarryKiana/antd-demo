import React from 'react'
import ProTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.prototype = {
  onClick: ProTypes.func.isRequired,
  completed: ProTypes.bool.isRequired,
  text: ProTypes.string.isRequired
}

export default Todo
