import React, { useEffect, useState } from 'react'

const Home = () => {
    const [user,setUser]=useState("Hello Every One")
    const Time= ()=>{
        const settime= setInterval(()=>{
             setUser("Wishing you all a very Happy New Year!")},2000)
             return ()=> clearInterval(settime)
        }
    useEffect(()=>{
        Time()
    },[])

  return (
    <>
    <div className='bg-amber-300 h-screen p-40 text-center'>
     <h1 className='text-4xl'>{user}</h1>
    </div>
    </>
  )
}

export default Home