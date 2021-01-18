import React from 'react'
import { Link } from 'react-router-dom'

export default function Dis({match,movieslist}) {
    const movidata=movieslist.find(item =>item.id==match.params.id)
    return (
        <div>
          <iframe width="727" height="409" src={movidata.trailurl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
         <h4>{movidata.description}</h4>
         <Link to="/">
         <button>Go back</button>
         </Link> 
        </div>
    )
}
