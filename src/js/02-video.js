import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

playerCurrentTime();

function playerCurrentTime(){
    const currentTime = localStorage.getItem("videoplayer-current-time");
    if(currentTime) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    };
};

player.on('timeupdate', throttle(({seconds})=>{
    localStorage.setItem("videoplayer-current-time", seconds)
    }, 1000));