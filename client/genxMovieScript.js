const yearEndpoint = `http://localhost:3003/years`
const musicEndpoint = `http://localhost:3003/songs`
const movieEndpoint = `http://localhost:3003/movies`
const genXMovieButton = document.getElementById('genx')
const genXMovie = document.querySelector("#genXMovie")
const millMovie = document.querySelector("#millMovie")
const movies = `http://localhost:3003/movies`

window.onload = async (event) => {
    await console.log("page is fully loaded");

let targetYear = "66612c28f1731f39869b7436";
try {
    const response = await fetch(movieEndpoint);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const moviesData = await response.json();

    const moviesMatchingYear = moviesData.filter(movie => movie.year_id === targetYear);
    const movieContainer = document.getElementById('movie-container');
            moviesMatchingYear.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.innerHTML = `
                    <img src="${movie.image}" alt="Movie image" width='200' height='250'>
                    <h2>${movie.title}</h2>
                    <p>Genre: ${movie.genre}</p>
                    <p>Rated: ${movie.rated}</p>
                    <p>Summary: ${movie.summary}</p>
                    <a href="${movie.link}" target="_blank">Watch Trailer</a>
                    <p></p>
                `;
                movieContainer.appendChild(movieElement);
            });
    console.log(moviesMatchingYear);
} catch (error) {
    console.error('Error fetching movies:', error);
}
};



