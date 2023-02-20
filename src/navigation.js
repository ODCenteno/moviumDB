searchHero.addEventListener('search', () => { 
  console.log(searchHero.value)
  location.hash = '#search=' + searchHero.value.trim();
});
moviumLogo.addEventListener('click', () => { 
  location.hash = '';
});
trendingPreviewButton.addEventListener('click', () => { 
  location.hash = '#trends';
});
arrowBackIcon.addEventListener('click', () => { 
  history.back();
  // location.hash = '#home';
});


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
  console.log(location);

  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }

  document.documentElement.scrollTo = 0;
  document.body.scrollTo = 0;
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function trendsPage() {
  console.log('Trends!');

  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.add('inactive');
  categoriesPreviewList.classList.add('inactive');
  relatedMoviesSectionContainer.classList.add('inactive');
  genericList.classList.remove('inactive');
  trendingPreviewButton.classList.add('inactive');
  movieDetail.classList.add('inactive');

  getTrendingMovies()
}
function homePage() {
  console.log('Home Page!');

  navBar.classList.remove('inactive');
  arrowBackIcon.classList.add('inactive');
  menuIcon.classList.add('inactive');
  searchHero.classList.remove('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.remove('inactive');
  categoriesPreview.classList.remove('inactive');
  categoriesPreviewList.classList.remove('inactive');
  genericList.classList.add('inactive');
  trendingPreviewButton.classList.remove('inactive');
  movieDetail.classList.add('inactive');
  relatedMoviesSectionContainer.classList.add('inactive');


  genresContainer.innerHTML = '';
  
  getTrendingMoviesPreview();
  getMoviesGenres();
}

function categoriesPage() {
  
  console.log('Categories Page!');
  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.add('inactive');
  categoriesPreviewList.classList.add('inactive');
  relatedMoviesSectionContainer.classList.add('inactive');
  genericList.classList.remove('inactive');
  movieDetail.classList.add('inactive');


  const [ _, genreData] = location.hash.split('=');
  const [ genreID, genreName] = genreData.split('-');

  genericlistTitle.textContent = genreName;

  getMoviesByGenre(genreID);
}

function movieDetailsPage() {
  console.log('Movie Page!');
  console.log();
  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.add('inactive');
  relatedMoviesSectionContainer.classList.remove('inactive');
  genericList.classList.add('inactive');
  movieDetail.classList.remove('inactive');

  const [ _, hashData] = location.hash.split('=');
  const [ movieId, movieName] = hashData.split('-');
  getMovieById(movieId);
  getSimilarMoviesById(movieId)
}

function searchPage() {
  console.log('Search!');

  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.remove('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.add('inactive');
  categoriesPreviewList.classList.add('inactive');
  relatedMoviesSectionContainer.classList.add('inactive');
  genericList.classList.remove('inactive');

  let [ _, query] = location.hash.split('=');
  query = query.replaceAll('%20', ' ');
  getMoviesBySearch(query);
}
