import React from 'react'

const Button = ({cbFunction , text , extraClasses}) => {
  return (
    <button onClick={cbFunction} className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-1.5 rounded-xl ${extraClasses}`}>
      {text}
    </button>
  )
}

export default Button