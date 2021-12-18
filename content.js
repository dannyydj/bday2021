// document.addEventListener("DOMContentLoaded", function(event) { 
//     snowfall();
//     setTimeout(function() { typewriter(); }, 4500);
// });

document.addEventListener("DOMContentLoaded", function(event) { 
    snowman1 = document.getElementById("snowman-1")
    snowman2 = document.getElementById("snowman-2")
    snowman3 = document.getElementById("snowman-3")
    chatbubble = document.getElementById("chat-bubble-1")
    snowman1.style.display = "none"
    snowman2.style.display = "none"
    snowman3.style.display = "none"
    chatbubble.style.display = "none"
    setTimeout(function() { flashStart(); }, 1000);
    console.log("loaded dom")
});

window.onload = function() { 
    console.log("loaded assets")
}

var loopFlash = 1
function play(){
    loopFlash = 100;
    containerText = document.getElementById("tapme").parentNode
    containerText.style.display = "none"
    snowman();
    snowfall();
    setTimeout(function() { typewriter(); }, 5500);
    playmusic();
}

function playmusic(){
    var audio = document.getElementById("christmas-music");
    audio.play();
    console.log("start music");
}

function snowman(){
    snowman1 = document.getElementById("snowman-1")
    snowman2 = document.getElementById("snowman-2")
    snowman3 = document.getElementById("snowman-3")
    chatbubble = document.getElementById("chat-bubble-1")

    snowman1.style.display = "block"
    snowman1.classList.add("snowman","snowman-top","animate__animated", "animate__bounceInDown");

    snowman2.style.display = "block"
    snowman2.classList.add("snowman","snowman-mid","animate__animated", "animate__bounceInDown");

    snowman3.style.display = "block"
    snowman3.classList.add("snowman","snowman-bottom","animate__animated", "animate__bounceInDown");

    chatbubble.style.display = "block"
    chatbubble.classList.add("chat-bubble","animate__animated", "animate__bounceIn");

    console.log("start snowman");
}

function snowfall(){
    for (i = 0; i < 50; i++){
        var snowflake = document.createElement("div")
        snowflake.classList.add("snowflake");

        ranSize = (Math.random() * (2.4 - 0.20) + 0.20).toFixed(2)
        ranIni = (Math.random() * (15.0 - (-15.0)) + (-15.0)).toFixed(2)
        ranEnd = (Math.random() * (15.0 - (-15.0)) + (-15.0)).toFixed(2)
        ranLeft = Math.ceil(Math.random() * (100 - 1) + 1);
        ranDelay = Math.ceil(Math.random() * (20 - 2) + 2) * -1;
        ranAnimate = Math.ceil(Math.random() * (20 - 9) + 9);
        ranBlur =  Math.ceil(Math.random() * (3 - 1) + 1);
        // console.log(ranLeft)

        snowflake.style.setProperty('--size', ranSize+'vw');
        snowflake.style.setProperty('--left-ini', ranIni+'vw');
        snowflake.style.setProperty('--left-end', ranEnd+'vw');
        snowflake.style.setProperty('left', ranLeft+'vw');
        snowflake.style.setProperty('animation', 'snowfall '+ranAnimate+'s linear infinite');
        snowflake.style.setProperty('animation-delay', ranDelay+'s');
        snowflake.style.setProperty('filter', 'blur('+ranBlur+'px)');
        snowflake.style.setProperty('top', '-5vh');

        document.getElementById("body").appendChild(snowflake);
    }

    console.log("start snowfall");
}

const timer = ms => new Promise(res => setTimeout(res, ms))
async function typewriter() {
    var containerText = document.getElementById("greet")
    var i = 0;
    var speed = 200;
    var txt = containerText.getAttribute("data");
    containerText.innerHTML = "";
    while(i < txt.length){
        if(txt.charAt(i) == '\\')
            containerText.innerHTML += "<br>";
        else
            containerText.innerHTML += txt.charAt(i);
        i++;
        await timer(speed)
    }
}

async function flashStart() {
    var tapmeText = document.getElementById("tapme")
    var speed = 3500
    while(loopFlash < 5){
        tapmeText.classList.add("animate__animated", "animate__flash"); 
        loopFlash++
        console.log(loopFlash)
        await timer(speed)
        tapmeText.classList.remove("animate__animated", "animate__flash"); 
        await timer(speed)
    }
}
