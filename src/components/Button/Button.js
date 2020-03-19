import React from 'react'

const Button = ({ buttonType, children, disabled, onClick }) => {
  const className = buttonType ? `button ${buttonType}` : 'button'
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        style={{
          pointerEvents: disabled ? 'none' : 'all',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {children}
      </button>
      <style jsx>
        {`
          .button {
            color: #FFF;
            width: 100%;
            border-radius: 3px;
            font-size: 14px;
            line-height: 32px;
            cursor: pointer;
            border: none; 
            padding: 0 12px;
            white-space: nowrap;
          }
          .button:hover {
            opacity: .6;
          }
          .failure {
            background: #DD1C1A;
          }
          .success {
            background: #19BC9B;
          }
          .light {
            background: rgba(255,255,255,0.1);
          }
        `}
      </style>
    </>
  )
}

export default Button