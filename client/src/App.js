import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Watched from './Watched';
import Unwatched from './Unwatched';
import Details from './Details';

function App() {
  return (
    <>

     <button><Link to='/watched'>Watched List</Link></button>
     <button><Link to='/'>Unwatched List</Link></button>
    
      <div>
        <Routes>
          <Route path='/' element={<Unwatched/>} />
          <Route path='/watched' element={<Watched/>} />
          <Route path='/movies/:id' element={<Details/>} />
        </Routes>
      </div>
    
    </>

  );
}

export default App;
