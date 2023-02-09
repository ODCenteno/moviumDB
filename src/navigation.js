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
  getTrendingMoviesPreview();
  getMoviesGenres();
}

function categoryPage() {
  console.log('Category!');
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