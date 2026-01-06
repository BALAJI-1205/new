import React, { useEffect, useState } from 'react'
import Datas from './Datas'
const Count = () => {
    const[count,setCount]=useState(0)
    const handle=()=>{
        setCount(count+1)

    }

  return (
    <>
    <div>
      Context  {count}
      <Datas date={count}/>
        <br/>
        <button onClick={handle}>clicking</button>
    </div>
    </>
  )
}

export default Count