import React from 'react'

const Hint = ({ children }) => (
  <>
    <span className="hint">{children}</span>
    <style jsx>
      {`
        .hint, label {
          line-height: 60px;
        }
      `}
    </style>
  </>
)

export default Hint