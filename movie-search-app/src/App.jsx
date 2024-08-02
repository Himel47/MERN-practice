// import Search from "./components/Search";
// import apiPath from "./assets/moviesAPI.txt";
import { useEffect, useState } from "react";
import Result from "./components/Result";
import axios from "axios";
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2"
const searchURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {

  // let moviesApi;

  // fetch(apiPath)
  //   .then(response => moviesApi = response.text());

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeSearchText = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(apiURL)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getSearchedMovies = () => {
    axios.get(searchURL + search)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  },
    [search]
  );

  return (
    // <div className="App">
    //   <Search/>
    // </div>
    <div className="max-w-[1250px] shadow-2xl min-h-[450px] mx-auto p-4">
      <input type="search" value={search} onChange={changeSearchText} className="w-full border border-slate-700 rounded-lg text-slate-800 p-4" />
      {
        movies.length === 0 ?
          <div className="text-center text-3xl mt-3">
            Loading ...
          </div>
          :
          <Result movies={movies} />
      }
    </div>
  );
}

export default App;
