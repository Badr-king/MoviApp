import Navvbar from './component/Serchbar/Serchbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch} from  "react-router-dom";

import {useState} from 'react';
import Movidata from './Movidata';
import Movilist from './component/Movilist/Movilist';
import Addmovi from './component/Addmovi/Addmovi';
import Dis from './component/Dis/Dis'
function App() {
  const [movieslist,setMovieslist] = useState(Movidata)
  const [serchinput, setSerchinput] = useState("")
  const [rating, setRating] = useState(0)

console.log(rating)
     return (
    
        <div className="App">
            <Switch>
             <Route exact path="/"render={()=>(

                <div>
                 <Navvbar setSerchinput={setSerchinput}  setRating={setRating}/>
                 <Movilist movieslist={movieslist} serchinput={serchinput} rating={rating}/>
                 </div>

             )}/>
             <Route path="/movies/:id"render={({match})=> <Dis match={match} movieslist={movieslist}/>} />
             </Switch>

             
        </div>
        
  );
}

export default App;
