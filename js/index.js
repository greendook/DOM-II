// Your code goes here


// Fun Bus Header
const funBusHeader = document.querySelector(".logo-heading")
// 1
funBusHeader.addEventListener("mouseenter", () => {
    funBusHeader.style.transform = "scale(1.5)";
    funBusHeader.style.transition =
        "transform 0.3s"
})
// 2
funBusHeader.addEventListener("mouseleave", () => {
    funBusHeader.style.transform = "scale(1)";
})

//Turns the nav-bar red after click
// 3
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = "blue";
    })
})
// 4
const changeImg = document.querySelector('.bus');
changeImg.addEventListener("dblclick", () => {
    changeImg.src = "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg";
})

// 5 
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// 6 // Stop Propagation
const welcome = document.querySelector(".myH")

welcome.addEventListener("wheel", myFunction);
function myFunction() {
    this.style.fontSize = "100px";
}

const letsGo = document.querySelector(".myHTwo")

letsGo.addEventListener("wheel", myFunction);
function myFunction() {
    this.style.fontSize = "100px";
    event.stopPropagation();
}

// 7 // Stop Propagation
const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor = "papayawhip";
})

const header = document.querySelector('header');

header.addEventListener('click', () => {
    header.style.backgroundColor = "red";
    event.stopPropagation();
})

// 8
document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

// 9
const noContext = document.querySelector('.copyright');

noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// 10
const dest = document.querySelector('.destination');

dest.onpointerout = (event) => {
    console.log('Pointer moved out');
};

// 11
const pointerMove = document.querySelector('body');

pointerMove.onpointermove = (event) => {
    console.log('Pointer moved');
};

// prevent default action
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("stopped the link");
})