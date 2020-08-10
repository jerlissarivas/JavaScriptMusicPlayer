let songs = [];
let currentSong = 0;

const title = document.querySelector("h1");
const input = document.querySelector("input");
const label = document.querySelector("label");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const player = document.querySelector("audio");
player.volume = 0.3;

input.onchange = getSongs;
next.onclick = nextSong;
prev.onclick = prevSong;

function getSongs(event) {
  songs = event.target.files;
  playSong();
  label.innerText = songs[currentSong].name.slice(0, -4);
  // (-4) slices the last 4 characters of the song/file name
  title.innerText = "Spotifake Music Player 🤘";
}

function playSong() {
  let song = URL.createObjectURL(songs[currentSong]);
  label.innerText = songs[currentSong].name.slice(0, -4);
  player.setAttribute("src", song);
  play.innerText = "⏸";
  player.play();
}
