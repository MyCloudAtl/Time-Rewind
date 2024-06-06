// // const { response } = require("express");
// const yearEndpoint = `http://localhost:3003/years`
// const musicEndpoint = `http://localhost:3003/songs`
// const movieEndpoint = `http://localhost:3003/movies`
const genXMovieButton = document.getElementById('genx')
const genXMovie = document.querySelector("#genXMovie")
const millMovie = document.querySelector("#millMovie")
const genzMovie = document.querySelector("#genZMovie")
const genXMovies = `http://localhost:3003/movies/665f32cd7d912816ed0fdd09`

genXMovie.addEventListener ('click', function (event) {
    window.location.href = "genxIndex.html";
});
millMovie.addEventListener ('click', function (event) {
    window.location.href = "millIndex.html";
});
genZMovie.addEventListener ('click', function (event) {
    window.location.href = "genzIndex.html"
})   
genXMusic.addEventListener ('click', function (event) {
    window.location.href = "genxMusicIndex.html"
})
millMusic.addEventListener ('click', function (event) {
    window.location.href = "millMusicIndex.html"
})
genZMusic.addEventListener ('click', function (event) {
    window.location.href = "genzMusicIndex.html"
})

