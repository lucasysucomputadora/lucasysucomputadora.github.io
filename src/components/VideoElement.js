import React,{useState} from 'react';
// import { Switch, Route, Link } from "react-router-dom";



function VideoElement({ id, title, img}) {
     const [ids, setIds] = useState("")

     return (
          <div className="card">
               <div className="titulo">
                    {title}
               </div>
               <div className={"formating"} onClick={(id) => setIds(id)}>
                   {ids === ""? <img src={img} alt={id} />: <iframe className="fromating2" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> } 
               </div>
          </div>
     )
}

export default VideoElement

// https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCW8lccrAIZTuob48xn550jg&maxResults=100&order=date&key=AIzaSyAk1DgKV8PTszvK8wwRWnRHvVRqgSG96wo