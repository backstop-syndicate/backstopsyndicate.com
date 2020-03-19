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
            box-sizing: border-box;
            margin: 24px auto;
            max-width: 512px;
            width: 100%;
            padding: 0 24px;
            position: relative;
        }

      `}
      </style>
    </>
  )
}

export default Container