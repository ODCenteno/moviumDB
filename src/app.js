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
function createMovies(movies, container) {
  container.innerHTML = '';

  movies.forEach(movie => {
    container.innerHTML += `
    <article class="movie-container">
      <img
        class="movie-img"
        src="${basePosterURL}${movie.poster_path}"
        alt="${movie.title}"/>
    </article>
    `
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
  genres.forEach(genre => {
    genresContainer.innerHTML += `
    <div class="category-container">
      <a><h3 id="${genre.id}" class="category-title">${genre.name}</h3></a>
    </div>
    `
  });

  const categoryTitle = await document.querySelectorAll('.category-title');
  categoryTitle.forEach(categoryTitle => {
    categoryTitle.addEventListener('click', (e) => {
      console.log(e);
      const genre = {
        id: categoryTitle.id,
        name: categoryTitle.textContent
      };
      location.hash = `#category=${genre.id}-${genre.name}`;
    });
  });
}

async function getMoviesByGenre(id) {
  genresContainer.innerHTML = '';
  const { data } = await api(`/discover/movie?with_genres=${id}`);
  console.log(data)

  const movies = data.results;

  createMovies(movies, genericListContainer);
}

async function getTrendMovies() {
  
}