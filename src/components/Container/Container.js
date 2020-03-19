import React from 'react'

const Container = ({ children }) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>
      {`
        .container {
            margin: 12px auto;
            width: 450px;
            position: relative;
        }

      `}
      </style>
    </>
  )
}

export default Container