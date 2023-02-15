trendingPreviewButton.addEventListener('click', trendsPage);
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
arrowBackIcon.addEventListener('click', homePage);
movieContainer.forEach(e => {
  e.addEventListener('click', movieDetailsPage)});

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
}

function homePage() {
  console.log('Home Page!');
  navBar.classList.remove('inactive');
  arrowBackIcon.classList.add('inactive');
  menuIcon.classList.add('inactive');
  searchHero.classList.remove('inactive');
  heroImage.classList.remove('inactive');
  trendingPreviewSection.classList.remove('inactive');
  categoriesPreview.classList.remove('inactive');
  genericList.classList.add('inactive');
  
  getTrendingMoviesPreview();
  getMoviesGenres();
}

function categoriesPage() {
  console.log('Categories Page!');
  navBar.classList.add('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.remove('inactive');
  categoriesPreviewList.classList.remove('inactive');
  relatedMoviesContainer.classList.add('inactive');
  genericList.classList.add('inactive');
  getMoviesGenres();
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
  relatedMoviesContainer.classList.add('inactive');
  genericList.classList.add('inactive');
  movieDetail.classList.remove('inactive');
}
function searchPage() {
  console.log('Search!');

  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.add('inactive');
  searchHero.classList.remove('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.remove('inactive');
  categoriesPreview.classList.remove('inactive');
  categoriesPreviewList.classList.remove('inactive');
  relatedMoviesContainer.classList.add('inactive');
  genericList.classList.remove('inactive');
}
function trendsPage() {
  console.log('Trends!');

  navBar.classList.remove('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.remove('inactive');
  trendingPreviewSection.classList.remove('inactive');
  categoriesPreview.classList.add('inactive');
  categoriesPreviewList.classList.add('inactive');
  relatedMoviesContainer.classList.add('inactive');
  genericList.classList.add('inactive');
}