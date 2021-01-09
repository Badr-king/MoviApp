import React from 'react'
import Movicard from '../MoviCard/MoviCard.jsx';
import './Movilist.css'
import Addmovi from '../Addmovi/Addmovi'
function Movilist(props) {
   const {movieslist,serchinput,rating}=props
    return (
        <div className="movilist">
            {movieslist.map((movi,index)=> movi.rate>=rating && movi.title.toUpperCase().startsWith(serchinput.toUpperCase())?
               <Movicard movi={movi}/>
               :<></>
            )}

             <Addmovi />

        </div>
    )
}

export default Movilist
