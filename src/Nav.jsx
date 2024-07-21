import React from 'react'
import { useSelector } from 'react-redux'


const Nav = () => {
  const amount = useSelector((state)=>state.amount)
  return (
    <>
      <div className='text-center'>
        <br />
        <h1>Your current balance is {amount}</h1>
      </div>
    </>
  )
}

export default Nav