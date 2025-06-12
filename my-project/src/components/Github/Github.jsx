import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github () {
    const data = useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sameeralydev')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='flex justify-center flex-col items-center text-center gap-6 bg-gray-100 m-4 text-black font-bold p-4 text-3xl '>Github Followers: '{data.followers}'
    <img className='flex justify-self-center' src={data.avatar_url} alt="Git Picture" width={300} /></div>
  )
}

export default Github 

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/Sameeralydev')
    return res.json()
}