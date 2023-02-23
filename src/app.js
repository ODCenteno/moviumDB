const basePosterURL = 'https://image.tmdb.org/t/p/w300';

// Preparando la instancia de Axios en JS
const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	params: {
		'api_key': API_KEY,
	}
})

// utils

const lazyLoader = new IntersectionObserver(handleIntersect);

let target = document.querySelector(`.${container}`);
observer.observe(target);

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > prevRatio) {
      entry.setAttribute.src = target.data-img
    }
  });

  observer.unobserve(target);
}

const changeLocation = ((id, movieTitle) => {
  location.hash = `#movie=${id}-${movieTitle.trim()}`;
});

function createMovies(movies, container) {
  container.innerHTML = '';

  movies.forEach(movie => {
    container.innerHTML += `
      <article class="movie-container">
        <img
          class="movie-img"
          id="${movie.id}"
          data-img="${basePosterURL}${movie.poster_path}"
          alt="${movie.title}"/>
      </article>
    `
  });

  container.addEventListener("click", (e) => {
    // console.log(e.target);
    const movie = {
      id: e.target.id,
      name: e.target.alt,
    };
    if (e.target.nodeName === 'IMG') {
      location.hash = `#movie=${movie.id}-${movie.name}`;
    }
  });
}

function createCategories(genres, container) {
  container.innerHTML = '';
  genres.forEach(genre => {
    container.innerHTML += `
    <div class="category-container">
      <a><h3 id="${genre.id}" class="category-title">${genre.name}</h3></a>
    </div>
    `
  });

  container.addEventListener('click', (event) => {
    console.log(event.target);
    const genre = {
      id: event.target.id,
      name: event.target.textContent
    };
    if (event.target.nodeName === 'H3') {
      location.hash = `#category=${genre.id}-${genre.name}`;
    }
  });
}


// API Calls

async function getTrendingMoviesPreview() {
  
  const { data } = await api(`/trending/movie/week`);
  const movies = data.results;

  createMovies(movies, trendingPreview);
}

async function getMoviesGenres() {
  genresContainer.innerHTML = '';
  const { data } = await api('/genre/movie/list');
  console.log(data)

  const genres = data.genres;

  createCategories(genres, genresContainer);
}

// Get Data

async function getMoviesByGenre(id) {
  genresContainer.innerHTML = '';
  const { data } = await api(`/discover/movie?with_genres=${id}`);
  console.log(data)

  const movies = data.results;

  createMovies(movies, genericListContainer);
}

async function getMoviesBySearch(query) {
  genresContainer.innerHTML = '';
  genericlistTitle.textContent = query;
  const { data } = await api(`/search/movie?query=${query}`);
  console.log(data)

  const movies = data.results;

  createMovies(movies, genericListContainer);
}

async function getTrendingMovies() {
  const { data } = await api(`/trending/movie/week`);
  const movies = data.results;

  createMovies(movies, genericListContainer);
  genericlistTitle.textContent = 'Tendencias';
}

async function getMovieById(id) {
  const { data: movie } = await api(`/movie/${id}`);
  console.log(movie)

  imgSource = basePosterURL + movie.poster_path;

  movieImgHero.src = imgSource;
  movieImgHero.alt = movie.title
  movieDetailTitle.textContent = movie.title;
  movieScore.textContent = Math.round(movie.vote_average);
  movieDetailDescription.textContent = movie.overview;
  
  createCategories(movie.genres, categoriesList);
  getSimilarMoviesById(id)
};

async function getSimilarMoviesById(id) {
  const { data } = await api(`/movie/${id}/recommendations`);
  console.log('got similar movies');

  const similarMovies = data.results;

  createMovies(similarMovies, relatedMoviesContainer)
}