import React,{useEffect,useState} from 'react'

import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/Permanent'
import axios from '../Axios'
import YouTube from 'react-youtube'

function RowPost(props) {
   const [movies, setMovies] = useState([])
   const [urlid,setUrlId]=useState('')
   console.log(urlid,'urlid');
  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data);
    setMovies(response.data.results)
   }).catch(err=>{
    alert('Network Error')
   }) 
  
    
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      console.log(response,'response');
     if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
     }
    })
    
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'picture'}  alt='picture' src={`${imageUrl+obj.backdrop_path}`}  />
          )}
            
          
        </div>
           
      { urlid && <YouTube opts={opts} videoId= {urlid.key}/>}  
    </div>
  )
}

export default RowPost