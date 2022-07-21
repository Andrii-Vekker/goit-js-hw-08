import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");

const CURRENT_TIME = "videoplayer-current-time"
const player = new Player(iframe, {
    id: iframe.id,
    width: iframe.width
});
function savinTimeFn (data) {
    const value = data.seconds;
    console.log(value)
         localStorage.setItem(CURRENT_TIME, JSON.stringify(value));
    };
	player.on('timeupdate', throttle(savinTimeFn, 1000))
const savedTime = localStorage.getItem(CURRENT_TIME);

// player.setCurrentTime(savedTime);
    player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});