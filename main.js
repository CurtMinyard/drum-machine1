// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
// This function is called every 600ms
let count = 1;

function update() {
    const metronomeOn = document.getElementById('metronome').checked;
    const kickOn = document.getElementById('kick-drum').checked;
    const snareOn = document.getElementById('snare-drum').checked;
    const hihatOn = document.getElementById('hi-hat').checked;
    const countDisplay = document.getElementById('metronome-count');
    if (countDisplay) {
        countDisplay.innerText = count;
    }

    if (metronomeOn) {
        if (count === 4) {
            tock.play();
        } else {
            tick.play();
        }
    }
    if (kickOn) {
        const kickTiming = Number(document.getElementById('kick-drum-timing').value);
        if (kickTiming === count) {
            kick.play();
        }
    }
    if (snareOn) {
        const snareTiming = Number(document.getElementById('snare-drum-timing').value);
        if (snareTiming === count) {
            snare.play();
        }
    }
    if (hihatOn) {
        const hihatTiming = Number(document.getElementById('hi-hat-timing').value);
        if (hihatTiming === count) {
            hihat.play();
        }
    }

    // Move to next beat (loop back to 1 after 4)
    count = count % 4 + 1;
}

function setupUpdate() {
    setInterval(update, 600); 
}
// This function sets up update() to be called every 600ms
setTimeout(setupUpdate, 300);