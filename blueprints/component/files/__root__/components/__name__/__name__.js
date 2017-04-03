import React from 'react'

export default function <%= pascalEntityName %> (props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

<%= pascalEntityName %>.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string]),
  onClick: React.PropTypes.func
}
