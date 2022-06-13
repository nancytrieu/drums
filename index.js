//Detect button press
// for loop to loop through all 7 buttons on page
// all the buttons have one the same class names and can be identified by the html code 
// this. shows the current button that was clicked
const numOfDrumBtns = document.getElementsByClassName('drum').length;

for(let i=0; i<numOfDrumBtns; i++) {
    document.getElementsByClassName('drum')[i].addEventListener('click', function() {
        let current = this.innerHTML;
        keySound(current);
    })
}

//Detect keybord press
// 'keydown' shows when a key is pressed on the keyboard
// adding event to the function logs all properties of the key pressed including which key
document.addEventListener('keydown', function(event) {
    keySound(event.key);
})

//Plays the sound corresponding to pressed button/key
function keySound(key) {
    switch(key) {
        case 'w':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'a':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'd':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'j':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    }
}

// let audio = new Audio('sounds/tom-1.mp3');
//         audio.play();