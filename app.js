
let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function () {
    isHidden = !isHidden;
    if (isHidden) {
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="icons/close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-full" src="icons/plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPLay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});


let trackList = [
    {
        name: "You Belong With Me",
        artist: "Taylor Swift",
        path: "music/Taylor Swift  You Belong With Me.mp3",
    },
    {
        name: "Love Story",
        artist: "Taylor Swift",
        path: "music/Taylor Swift  Love Story.mp3",
    },
    {
        name: "That's So True",
        artist: " Gracie Abrams",
        path: "music/Thats So True.mp3",
    },
    {
        name: "Dù Cho Tân Thế",
        artist: "Erik",
        path: "music/ERIK  Dù cho tận thế vẫn yêu em.mp3",
    },
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex) {
    currentTrack.src = trackList[trackIndex].path;
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
    currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack() {
    if (isPlaying == false) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">';
    soundBarsLottie.play();
}

function pauseTrack() {
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">';
    soundBarsLottie.stop();
}

function nextTrack() {
    if (trackIndex < trackList.length - 1) {
        trackIndex += 1;
        loadTrack(trackIndex);
        playTrack();
    } else {
        trackIndex = 0;
        loadTrack(trackIndex);
        playTrack();
    }
}

function prevTrack() {
    if (trackIndex > 0) {
        trackIndex -= 1;
        loadTrack(trackIndex);
        playTrack();
    } else {
        trackIndex = trackList.length - 1;
        loadTrack(trackIndex);
        playTrack();
    }
}