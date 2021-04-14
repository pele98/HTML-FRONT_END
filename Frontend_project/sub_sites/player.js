const background = document.querySelector("#background"); // background derived from album cover below
const thumbnail = document.querySelector("#thumbnail"); // album cover
const song = document.querySelector("#song"); // audio object

const value = document.querySelector(".value").getAttribute("value");

const songTitle = document.querySelector(".song-title"); // element where track title appears
const progressBar = document.querySelector("#progress-bar"); // element where progress bar appears
let pPause = document.querySelector("#play-pause"); // element where play and pause image appears

var starman_songs = [
  "../sounds/dreamer.mp3",
  "../sounds/fade_to_black.mp3",
  "../sounds/villasukka.mp3",
  "../sounds/without_you.mp3"
];

var starman_titles = ["Dreamer", "Fade to Black", "Wool sock", "Without you"];

var leonardo_songs = [
  "../sounds/harmony.mp3",
  "../sounds/one.mp3",
  "../sounds/million_nights.mp3",
  "../sounds/islander.mp3"
];

var leonardo_titles = ["Harmony", "One", "Million nights", "Islander"];

var lion_songs = [
  "../sounds/random.mp3",
  "../sounds/rautaketju.mp3",
  "../sounds/teurastaja.mp3",
  "../sounds/now_that_we're_dead.mp3"
];

var lion_titles = [
  "Killer carrot",
  "Iron chain",
  "Butcher",
  "Now that we're dead"
];

var alone_songs = [
  "../sounds/river_flows_in_you.mp3",
  "../sounds/dear_agony.mp3",
  "../sounds/give_me_a_sign.mp3",
  "../sounds/while_your_lips_are_still_red.mp3"
];

var alone_titles = [
  "River flows in you",
  "Dear agony",
  "Give me a sign",
  "While your lips </br> are still red"
];

var songs = [];
var songTitles = [];

if (value === "0") {
  songs = starman_songs;
  songTitles = starman_titles;
}

if (value === "1") {
  songs = leonardo_songs;
  songTitles = leonardo_titles;
}

if (value === "2") {
  songs = lion_songs;
  songTitles = lion_titles;
}

if (value === "3") {
  songs = alone_songs;
  songTitles = alone_titles;
}

console.log(songs);
console.log(songTitles);

var songIndex = 0;

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      thumbnail = document.querySelector("#thumbnail");

    pPause.src = "../images/pause.png";
    thumbnail.style.transform = "scale(1.15)";

    song.play();
    playing = false;
  } else {
    pPause.src = "../images/play.png";
    thumbnail.style.transform = "scale(1)";

    song.pause();
    playing = true;
  }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener("ended", function () {
  nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
function nextSong() {
  songIndex++;
  if (songIndex > 3) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  //thumbnail.src = thumbnails[0];
  //background.src = thumbnails[0];

  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 3;
  }
  song.src = songs[songIndex];
  //thumbnail.src = thumbnails[0];
  //background.src = thumbnails[0];

  //songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  song.currentTime = progressBar.value;
}
