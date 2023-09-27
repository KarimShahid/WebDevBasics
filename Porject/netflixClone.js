// call the main functions when the page loads
window.onload = () => {
  getOriginals();
  getTrending();
  getTopRated();
};

const fetchMovies = (url, dom_element, path_type) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((data) => showMovies(data, dom_element, path_type))
    .catch((err) => console.log(err));
};

const showMovies = (movies, dom_element, path_type) => {
  let moviesEl = document.querySelector(dom_element);
  console.log(movies);

  //   looping
  for (let movie of movies.results) {
    console.log(movie);

    // creating an element img within element
    let imageElement = document.createElement("img");

    // // setting attributre - setting the id
    imageElement.setAttribute("data-id", movie.id);

    // // setting source - putting the picture in gthe element
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // // appending the imageElement to the dom_element selected
    moviesEl.appendChild(imageElement);
    // moviesEl.appendChild(imageElement)
  }
};

// to get Netflix Originals
const getOriginals = () => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";

  fetchMovies(url, ".original__movies", "poster_path");
};

const getTrending = () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
};

const getTopRated = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, "#top_rated", "backdrop_path");
};
