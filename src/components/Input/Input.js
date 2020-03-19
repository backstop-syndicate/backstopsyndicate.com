import React from 'react'

const Input = ({
  onChange,
  type = "text",
  value,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <>
    <input
      onChange={handleChange}
      type={type}
      value={value}
    />
    <style jsx>
      {`

          input {
              background: #433838;
              border-radius: 3px;
              height: 32px;
              border: none;
              color: #ffffff;
              font-size: 14px;
              text-indent: 8px;
          }
        `}
      </style>
    </>
  )
}

export default Input