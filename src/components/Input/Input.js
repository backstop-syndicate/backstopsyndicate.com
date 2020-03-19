import React from 'react'

const Input = ({
  actions,
  error,
  onChange,
  type = "text",
  value,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <>
      <div style={{
        background: '#433838',
        borderRadius: 3,
        height: 44,
        color: '#FFF',
        fontSize: 14,
        position: 'relative',
      }}>
        <input
          onChange={handleChange}
          type={type}
          value={value}
        />
        <div style={{
          alignItems: 'center',
          display: 'flex',
          position: 'absolute',
          top: 0, right: 6, bottom: 0,
        }}>
          {actions}
        </div>
      </div>
      <style jsx>
        {`
          input {
              background: transparent;
              height: 44px;
              border: none;
              color: #ffffff;
              font-size: 14px;
              text-indent: 8px;
              width: 100%;
              margin: 0;
              padding: 0;
          }
        `}
      </style>
    </>
  )
}

export default Input