const yearEndpoint = `http://localhost:3003/years`
const musicEndpoint = `http://localhost:3003/songs`
const movieEndpoint = `http://localhost:3003/movies`
const genXMusicButton = document.getElementById('genx')
const genXMusic = document.querySelector("#genXMusic")
const music = `http://localhost:3003/songs`

window.onload = async (event) => {
    await console.log("page is fully loaded");

let targetYear = "66612c28f1731f39869b7436";
try {
    const response = await fetch(musicEndpoint);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const songInfo = await response.json();

    const songsWithinYear = songInfo.filter(music => music.year_id === targetYear);
    const musicContainer = document.getElementById('music-container');
            songsWithinYear.forEach(music => {
                const musicElement = document.createElement('div');
                musicElement.innerHTML = `
                    <img src="${music.cover}" alt="Music image" width='250' height='250'>
                    <h2>${music.title}</h2>
                    <p>Artist: ${music.artist}</p>
                    <p>Genre: ${music.genre}</p>
                    <a href="${music.youtube}" target="_blank">Watch Music Video</a>
                    <p></p>
                `;
                musicContainer.appendChild(musicElement);
            });
    console.log(songsWithinYear);
} catch (error) {
    console.error('Error fetching songs:', error);
}
};