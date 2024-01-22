"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [Image, setImage] = useState([])
  const getImages = async () => {

    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImage(data);
    } catch (error) {
      console.log("error")
    }
  }
  return (

    <>
      <div className='flex items-center justify-center'>
        <button onClick={getImages} className=' mt-10 px-5 py-5 bg-black text-white text-xl font-extrabold rounded-xl'> Generate Images</button>
      </div>
      <div className='p-10'>
        {Image.map((items, i) => {
          return <img className='m-10 inline-block rounded' width={300} height={300} key={i} src={items.download_url} />
        })}
      </div>
    </>
  )
}

export default page