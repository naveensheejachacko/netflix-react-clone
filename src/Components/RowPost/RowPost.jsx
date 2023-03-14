import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {imgUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props){
  // console.log(props);
  const[movies,setMovies]=useState([]);
  const[urlId,seturlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      alert('error'+err)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }
      else{
        console.log("array empty")

      }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
          movies.map((obj,pos)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster': 'poster'} key={pos} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost