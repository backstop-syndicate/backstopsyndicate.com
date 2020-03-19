import React from 'react'

const Button = ({ buttonType, children, onClick }) => {
  const className = buttonType ? `button ${buttonType}` : 'button'
  return (
    <>
      <button className={className} onClick={onClick}>
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
        `}
      </style>
    </>
  )
}

export default Button