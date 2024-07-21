import { useState } from 'react'
import './App.css'

import Nav from './Nav'
import Shop from "./Shop"

function App() {
  return (
    <>
      <Nav></Nav>
      <Shop></Shop>
    </>
  )
}

export default App

// REDUX STEPS (boiler plate)
// 1) create action - DONE
    // create action functions and then dispatch it
// 2) create reducers
    // it takes 2 arguments (state,action)
// 3) combine reducers
    // make index.js file and combine all reducers
// 4) create store
    // create store.js and write createStore function with applymiddleware
// 5) connect store with application
    //connect the appliaction with the store using provider store

// HOW TO USE STATE
// import useSelector
// 1) useSelector

// HOW TO ADD TO STATE
// import useDispatch
// import actionCreators
// 1) use dispatch function to call a action