// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
let count = 1;
// This function is called every 600ms
function update() {
    if (count === 4) {
        tock.play();
    } else {
        tick.play();
    }

    // Move to next beat (loop back to 1 after 4)
    count = count % 4 + 1;
}
    

function updatetock() {

    // Play the 'tock' sound
    tock.play();
    
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

