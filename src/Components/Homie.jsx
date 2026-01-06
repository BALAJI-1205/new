import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Homie = () => {
    const {theme,themechange}=useContext(ThemeContext)
  return (
    <>
    <div className='bg-amber-500 text-white P-2 flex justify-between items-center'>
        <div>
            logo
        </div>
        <div className=' flex gap-2'>
            <a href=''>{theme?"Light":"Dark"}</a>
            <button onClick={themechange}>ThemeChange</button>
        </div>
    </div>
    </>
  )
}

export default Homie