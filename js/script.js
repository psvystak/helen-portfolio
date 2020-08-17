let elementCounter = 0;
let topElements = [...document.querySelectorAll(".menu-title-wrapper")];
let bottomElements = [...document.querySelectorAll("footer")];
let otherElements = [...document.querySelectorAll(".film-section")];
let buttons = document.querySelectorAll("menu li a");
let htmlCollection = topElements.concat(bottomElements, otherElements);

function mouseWheelWatcher(e) {
    let scrollStep = document.querySelector(".film-section").offsetHeight;
    if (e.deltaY < 0) {
        console.log("up");
        if (elementCounter <= 0) {
            elementCounter = 0;
        } else {
            elementCounter--;
        }
    } else {
        console.log("down");
        if (elementCounter === htmlCollection.length - 1) {
            elementCounter = htmlCollection.length - 1;
        } else {
            elementCounter++;
        }
    }
    window.scrollTo(0, scrollStep * elementCounter);
    window.removeEventListener("mousewheel", mouseWheelWatcher);
    setTimeout(function () {
        window.addEventListener("mousewheel", mouseWheelWatcher);
    }, 500)
}

window.addEventListener("mousewheel", mouseWheelWatcher);
buttons.forEach(function (el) {
    el.addEventListener("click", function (e) {
        elementCounter = +this.dataset.id;
    });
});
