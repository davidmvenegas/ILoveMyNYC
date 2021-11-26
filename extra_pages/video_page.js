// SPINNER
window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add("display");
    }, 3500);
};
// SPINNER

// VIDEO_CONTROLS

let video = document.querySelector('.side-video')
let btn = document.querySelector('.buttons i')
let bar = document.querySelector('.video-bar')

let playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '1'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.4'
    }
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    let barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.4'
    }
    console.log(video.currentTime, video.duration)
})

// VIDEO_CONTROLS