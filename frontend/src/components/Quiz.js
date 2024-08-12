import React, { useContext } from 'react'
import { stateContext } from '../hooks/useStateContext'

export default function Quiz() {

   const{ context , setContext }= useContext(stateContext)

   console.log(context)
  return (
    <div>Question</div>
  )
}

