import React from 'react'

const shan = () => {
  fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(console.log);
  return (
    <div>
      11
    </div>
  )
}

export default shan
