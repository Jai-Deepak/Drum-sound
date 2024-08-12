/* var numberofdrum = doucument.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrum; i++) {
    doucument.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    });
} */

var button = document.querySelectorAll("button");

button.forEach(function (button) {
    button.addEventListener("click", function (button) {
        makeSound(this.innerHTML);
        bAnimation(this.innerHTML);

    });

});
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    bAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

function bAnimation(currKey) {
    var ani = document.querySelector("." + currKey);
    ani.classList.add("pressed");

    setTimeout(function () {
        ani.classList.remove("pressed");
    }, 100)
}