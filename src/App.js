import Navvbar from './component/Serchbar/Serchbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';
import Movidata from './Movidata';
import Movilist from './component/Movilist/Movilist';
import Addmovi from './component/Addmovi/Addmovi';
function App() {
  const [movieslist,setMovieslist] = useState(Movidata)
  const [serchinput, setSerchinput] = useState("")
  const [rating, setRating] = useState(0)
console.log(rating)
     return (
        <div className="App">
             <Navvbar setSerchinput={setSerchinput}  setRating={setRating}/>
             <Movilist movieslist={movieslist} serchinput={serchinput} rating={rating}/>
             
        </div>
  );
}

export default App;
