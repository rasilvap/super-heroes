import React from 'react'
import './Text.css'

const Text = ({ children, variant = 'body', color = 'white' }) => {
  const classNames = []
  if (variant === 'title') {
    classNames.push('text-title')
  } else if (variant === 'body') {
    classNames.push('text-body')
  }

  if (color === 'white') {
    classNames.push('color-white')
  } else if (color === 'black') {
    classNames.push('color-black')
  }

  return <span className={`family ${classNames.join(' ')}`}>{children}</span>
}

export default Text
