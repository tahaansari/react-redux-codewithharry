import React from 'react'
import { addActionFunction, minusActionFunction } from './state/actions/amountAction'
import { useDispatch } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='text-center'> 
        <button className='btn btn-large btn-primary me-2' onClick={()=>dispatch(minusActionFunction(100))}>Minus 100</button>
        <button className='btn btn-large btn-primary' onClick={()=>dispatch(addActionFunction(100))}>Plus 100</button>
      </div>
    </>
  )
}

export default Shop