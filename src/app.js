const trendingPreview = document.getElementById('trendingPreview-card-container');
const genresContainer = document.getElementById('genres-container');

const baseURL = 'https://api.themoviedb.org/3';
const basePosterURL = 'https://image.tmdb.org/t/p/w300';


async function getTrendingMoviesPreview() {
  const res = await fetch(`${baseURL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  console.log(data)

  const movies = data.results;
  movies.forEach(movie => {
    trendingPreview.innerHTML += `
    <article class="movie-container">
      <img
        class="movie-img"
        src="${basePosterURL}${movie.poster_path}"
        alt="${movie.title}"/>
    </article>
    `
  });

}

async function getMoviesGenres() {
  const res = await fetch(`${baseURL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  console.log(data)

  const genres = data.genres;
  genres.forEach(genre => {
    genresContainer.innerHTML += `
    <div class="category-container">
      <h3 id="${genre.id}" class="category-title">${genre.name}</h3>
    </div>
    `
  });
}

getTrendingMoviesPreview();
getMoviesGenres();