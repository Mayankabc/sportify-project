console.log("welcome to spotify");


var songindex = 0;
let audioelemet = new Audio("");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('my-progress-bar');


let songs = [
    { songname: "Fearless part 2", filePath: "files/songs/fearless part 2.mp3", coverPath: "files/artworks-OfReNg5564AOvjbm-CNz9Zg-t500x500.jpg" },
    { songname: "Blinding Lights", filePath: "files/songs/Blinding Lights.mp3", coverPath: "files/blinding lights.jpg" },
    { songname: "Bones", filePath: "files/songs/bones.mp3", coverPath: "files/bones.jpg" },
    { songname: "Nine Thou", filePath: "files/songs/nine thou.mp3", coverPath: "files/nine thou.jpg" },
    { songname: "Do Ya Thing", filePath: "files/songs/do ya thing.mp3", coverPath: "files/do ya thing.jpg" },
    { songname: "No Lie", filePath: "files/songs/no lie.mp3", coverPath: "files/no lie.jpg" },
    { songname: "24K Magic", filePath: "files/songs/24k magic.mp3", coverPath: "files/24k magic.jpg" },
    { songname: "Bilionera", filePath: "files/songs/bilionera.mp3", coverPath: "files/Bilionera.jpg" },
    { songname: "Safari", filePath: "files/songs/safari.mp3", coverPath: "files/safari.jpg" },
    { songname: "Bai Hat Tro Choi", filePath: "files/songs/mlbb.mp3", coverPath: "files/mobile-legends-championships-2019-05-cc77.jpg" },
]



// handling play pause buttons

masterplay.addEventListener('click', () => {
    if (audioelemet.paused || audioelemet.currentTime <= 0) {
        audioelemet.play();
        document.getElementById("masterplay").src = "./files/Icons/icons8-pause-button-100.png";
    }
    else {
        audioelemet.pause();
        document.getElementById("masterplay").src = "./files/Icons/icons8-circled-play-96.png";
    }

})


// listning events

audioelemet.addEventListener('timeupdate', () => {

    // update seekbar
    console.log(audioelemet.currentTime);
    console.log(audioelemet.duration);
    progress = parseInt((audioelemet.currentTime / audioelemet.duration) * 10000000);
    //    console.log(progress);    
 
    myprogressbar.value = progress;

    console.log(myprogressbar.value);

    if (progress == 10000000) {
        document.getElementById("masterplay").src = "./files/Icons/icons8-circled-play-96.png";
    }
})


myprogressbar.addEventListener("change", () => {
    audioelemet.currentTime = (myprogressbar.value * audioelemet.duration) / 10000000;
})

// play songs by clicking thumbnail


// var checks = document.querySelectorAll('.song-cover');

// checks.forEach(function(check){
//   check.addEventListener('click', checkIndex);
// })

// function checkIndex(event){
//   console.log( Array.from(checks).indexOf(event.target) );
// }


// document.getElementsByClassName('song-cover').g





Array.from(document.getElementsByClassName('song-cover')).forEach((element, i) => {

    element.addEventListener('click', () => {
        
        document.getElementById('timelinee').style.opacity = "1";
        audioelemet.currentTime = 0;
        
        // console.log(myprogressbar.value);

        

        document.getElementById('playingcover').src = songs[i].coverPath;



        audioelemet.src = songs[i].filePath;
        masterplay.src = "./files/Icons/icons8-pause-button-100.png";
        audioelemet.play();
        // flag=0;
        songindex = i;

    })
})

// handling next and previous buttons
document.getElementById('next').addEventListener("click", () => {
    if (songindex != 9) {
        songindex++;
        audioelemet.src = songs[songindex].filePath;
        myprogressbar.value = 0;
        audioelemet.currentTime = 0;
        audioelemet.play();
        document.getElementById('playingcover').src = songs[songindex].coverPath;
        document.getElementById("masterplay").src = "./files/Icons/icons8-pause-button-100.png";
    }

})

document.getElementById('previous').addEventListener("click", () => {
    if (songindex != 0) {
        songindex--;
        audioelemet.src = songs[songindex].filePath;
        myprogressbar.value = 0;
        audioelemet.currentTime = 0;
        audioelemet.play();
        document.getElementById('playingcover').src = songs[songindex].coverPath;
        document.getElementById("masterplay").src = "./files/Icons/icons8-pause-button-100.png";
    }

})


