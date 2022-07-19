import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
console.log(iframe.width)

const player = new Player(iframe, {
    id: iframe.id,
    width: iframe.width
});

