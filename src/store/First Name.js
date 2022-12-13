import React from 'react'
import { useSelector } from 'react-redux'
const fname=useSelector((state)=>state.fname)
const firsname = () => {
  return (
    <div>{fname}</div>
  )
}

export default firstname