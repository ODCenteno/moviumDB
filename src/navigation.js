document.addEventListener('DOMContentLoaded', navigatior, false);
document.addEventListener('hashchanged', navigatior, false);

function navigatior() {
  console.log(`location ${ { location } }`);

  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoryPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log('Home!');
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

function categoryPage() {
  console.log('Category!');
  navBar.classList.add('inactive');
  menuIcon.classList.add('inactive');
  arrowBackIcon.classList.remove('inactive');
  searchHero.classList.add('inactive');
  heroImage.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreview.classList.remove('inactive');
  categoriesPreviewList.classList.remove('inactive');
  relatedMoviesContainer.classList.add('inactive');
  getMoviesGenres();
}
function movieDetailsPage() {
  console.log('Movie!');
}
function searchPage() {
  console.log('Search!');
}
function trendsPage() {
  console.log('Trends!');
}