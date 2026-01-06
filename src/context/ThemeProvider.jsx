import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'
const ThemeProvider = ({children}) => {
  const [theme,setTheme]=useState(true)

  const themechange = ()=>{
    setTheme(!theme)
  }

  return (
    <div>
   <ThemeContext.Provider value={{theme,themechange}}>
    {children}
    </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider