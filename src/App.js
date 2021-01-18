import React, { useState ,useEffect} from "react";
import Film from "./Components/Body/Film";
import Header from "./Components/Head/Header";
import styled from "@emotion/styled";

const ApiFeature='https://api.themoviedb.org/3/movie/popular?api_key=03c4bdf1d71dd935e63dd27e8cee129a&language=en-US&page=1'
const ApiSearching= 'https://api.themoviedb.org/3/search/movie?api_key=03c4bdf1d71dd935e63dd27e8cee129a&query=';
function App() {

const Container=styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  background: #06121e;
  margin:auto;
`

  // style
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(ApiFeature)
    .then((res) => res.json())
    .then((data)=> 
    {
      console.log(data);
      setMovies(data.results);
    })
  console.log("hello world")
  },[]);

function handleSubmit()
{}

function getSearchTermValue(inputValue)
{
    fetch(ApiSearching+inputValue)
    .then((res) => res.json())
    .then((data)=> 
    {
      console.log(data);
      setMovies(data.results);
    })
    console.log(inputValue)
}

  return (
    <div className="App">
      <Header onSubmit={handleSubmit} onGetValue={getSearchTermValue}></Header>
      <Container>
      {movies.length>0 && movies.map(movie => (
        <Film id={movie.id} {...movie} />
      ))}
      </Container>
    </div>
  );
}
export default App;
