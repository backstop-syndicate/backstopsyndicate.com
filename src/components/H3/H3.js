import React from 'react'

const H3 = ({ children }) => {
  return (
    <>
      <h3>{children}</h3>
      <style jsx>
      {`
        h3 {
          line-height: 50px;
        }
      `}
      </style>
    </>
  )
}

export default H3