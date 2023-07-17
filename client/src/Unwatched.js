import React, { useEffect, useState } from 'react';

const Unwatched = () => {

  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState()
  const [dummy, setDummy] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8082/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [dummy])

  return (
    <div className="App">
      <h1>Unwatched Movies</h1>
      <div className='movieInput'>
        <input type='text' placeholder="Add a Movie" onChange={e => setNewMovie(e.target.value)}/>
        <button onClick = {() => {
          if(newMovie) {
            let resBody = [{
              "title": newMovie,
              "list": "unwatched"
            }]

            const init = {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(resBody)
            };

            fetch('http://localhost:8082/movies', init)
              // .then(response => response.json())
              .then(data => console.log(data))
              .catch((error) => console.error('Error:', error))
              .then(()=>setDummy(!dummy))
          }
        }}>Submit Movie</button>
      </div>

      {movies.map((e, i) => {
        if(e.list == 'unwatched') 
          return (
            <div key={`${e.title}`}>
              <p id={`${e.title}_title`}>{e.title}</p>
              <button onClick={ () => {
                const init ={ method: 'DELETE'};
      
                fetch(`http://localhost:8082/movies/${e.title}`, init)
                  // .then(response => response.json())
                  .then(data => console.log(data))
                  .catch((error) => console.error('Error:', error))
                  .then(()=>setDummy(!dummy))
              }}>
                Delete Movie</button>

                <button onClick={ () => {
        
                  if(e.list !== 'watched') {
                    let resBody = [{
                      "title": newMovie,
                      "list": "watched"
                    }]
        
                    const init = {
                      method: 'PATCH',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify(resBody)
                    };
        
                    fetch(`http://localhost:8082/movies/${e.title}`, init)
                      // .then(response => response.json())
                      .then(data => console.log(data))
                      .catch((error) => console.error('Error:', error))
                      .then(()=>setDummy(!dummy))
                  } 
                }}>
                Add to Watched List</button>
            </div>  
            )
          })}
    </div>
  );
}

export default Unwatched;