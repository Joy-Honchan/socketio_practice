import React, { Component } from 'react'
import { styled } from '@mui/material'
import { keyframes } from '@mui/material'

const TypingEffect = () => {
  return (
    <StyleWrapper>
      <h1 className="typing">Hello! Let's Start Chatting!</h1>
    </StyleWrapper>
  )
}

const typingAnimation = keyframes({
  '100%': {
    left: '100%'
  }
})

const blinkAnimation = keyframes({
  to: {
    borderLeft: 'transparent'
  }
})

const StyleWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '5px',
  '.typing': {
    display: 'inline-block',
    position: 'relative',
    '&:before': {
      content: '""',
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderLeft: '5px solid #000',
      animation: `${typingAnimation} 3s steps(28) forwards, ${blinkAnimation} .7s infinite`
    }
  }
}))

export default TypingEffect
