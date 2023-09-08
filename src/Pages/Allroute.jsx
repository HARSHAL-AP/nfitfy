import React from 'react'
import {Routes,Route} from "react-router-dom"
import Pair from './Pair';
import Tokken from './Tokken';

const Allroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Tokken/>}></Route>
        <Route path='/pairs' element={< Pair/>}></Route>
    </Routes>
  )
}

export default Allroute