import React, { useState } from 'react'

function Toggle() {
    const [visiable , setvisiable] = useState(true)
  return (
    <>
    <h2> {visiable ? 'i am visiable': 'i am not visiable'} </h2>
    <button onClick={() => setvisiable(!visiable)}>{visiable ? 'show' : 'hide'}</button>
    </>
  )
}

export default Toggle