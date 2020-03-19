import React from 'react'

import Container from '../Container'

const Modal = ({ children, onDismiss }) => (
  <div style={{
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
  }}>
    <div
      onClick={onDismiss}
      style={{
        backgroundColor: 'rgba(0,0,0,0.85)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    />
    <Container>
      <div style={{
        backgroundColor: '#433838',
        borderRadius: 3,
        padding: 24,
      }}>
        {children}
      </div>
    </Container>
  </div>
)

export default Modal