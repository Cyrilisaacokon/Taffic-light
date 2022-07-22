

// let red = document.getElementById("red")
// let yellow = document.getElementById("yellow")
// let green = document.getElementById("green")
// let time = 5;
// let timeYellow = 10;




// red.style.opacity = 0.0
// yellow.style.opacity = 0.0
// green.style.opacity = 0.0



// function trafficRed() {
//     red.style.opacity = 1;
//     time--;
//     if (time < 1) {
//         red.style.opacity = 0;
//         clearInterval(intervalId)
//     }
// }

// let intervalId = setInterval(trafficRed, 1000)




// function trafficYellow() {
//     yellow.style.opacity = 1;

// }
// setTimeout(trafficYellow, 5000);




// function trafficGreen() {
//     yellow.style.opacity = 0;

//     green.style.opacity = 1;
//     if(timeYellow < 1){
//     }
// }
// setTimeout(trafficGreen, 10000)



let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let timing = document.getElementById("timing")
let time = 10;


red.style.opacity = 0.0
yellow.style.opacity = 0.0
green.style.opacity = 0.0
// red.style.color = "white"

function countDown() {
    --time;    
    timing.innerHTML = time;
    // red.innerHTML = time;
    // yellow.innerHTML = time;
    // green.innerHTML = time;

    if (time < 6) {
        red.style.opacity = 1;
        green.style.opacity = 0;
    }

    if (time < 4 ) {
        red.style.opacity = 0.0
        yellow.style.opacity = 1;
    }

    if (time < 2) {
        clearInterval(begin)
        yellow.style.opacity = 0.0
        green.style.opacity = 1
        time = 10;
        loop()
    }

    
}





function loop() {
   begin = setInterval(countDown, 2000);
}
loop()



