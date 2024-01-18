import React, { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../constants/Permanent'
import axios from '../Axios'
import './Banner.css'
import { useState } from 'react'


function Banner() {
  const [movie, setMovie] = useState([])
  const index=movie[Math.floor(Math.random()*movie.length)]
  console.log(movie);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results);
    setMovie(response.data.results)
    })
   
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${index? imageUrl+index.backdrop_path :""})`}}
    className='banner'>
        <div className='content'>
           <h1 className='title'>{index?.title}</h1>
           <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>My list</button>
           </div>
           <h1 className='description'>{index?.overview}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner