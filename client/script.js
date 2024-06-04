// const { response } = require("express");
const yearEndpoint = `http://localhost:3003/years`
const musicEndpoint = `http://localhost:3003/songs`
const movieEndpoint = `http://localhost:3003/movies`
const genXMovieButton = document.getElementById('genx')
const genXMovie = document.querySelector("#genXMovie")
const millMovie = document.querySelector("#millMovie")
const genXMovies = `http://localhost:3003/movies/665f32cd7d912816ed0fdd09`

genXMovie.addEventListener ('click', function (event) {
    window.location.href = "genxIndex.html";
});
millMovie.addEventListener ('click', function (event) {
    window.location.href = "page.html";
});

// button.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
// });
  
// genXMovie.addEventListener ('click', function (event) {
//     window.open("page.html")
// })   
// genXMovie.addEventListener ('click', function (event) {
//     window.open("page.html")
// })
// genXMovie.addEventListener ('click', function (event) {
//     window.open("page.html")
// })
// genXMovie.addEventListener ('click', function (event) {
//     window.open("page.html")
// })
// genXMovie.addEventListener ('click', function (event) {
//     window.open("page.html")
// })
