const arrows = document.querySelectorAll(".arrow");
const bigImg = document.querySelector("#photo img");
const thumbs = document.querySelectorAll(".thumb");
const thumbsArray = Array.from(thumbs);

let index = 1;
let newImg;

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", changeImg);
}

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", chooseImg);
}

function changeImg() {
    if (this.getAttribute("id") === "left") { // hvis vi har klikket på venstrepilen
        if (index > 1) {
            index--;
        } else {
            index = 6;
        }

    } else { // hvis vi har klikket på højrepilen
        if (index < 6) {
            index++;
        } else {
            index = 1;
        }

    }
    console.log(index);
    newImg = "images/wallpaper-gallery/wallpaper" + index + ".jpg";
    bigImg.setAttribute("src", newImg);

}

function chooseImg() {
    bigImg.setAttribute("src", this.getAttribute("src"));
    index = thumbsArray.indexOf(this) + 1;
    console.log(index);

}

document.onkeydown = function(event) {

    if (event.code === "ArrowLeft") { // der er klikket på 'venstre-pilen'
        // din kode her...
        if (index > 1) {
            index--;
        } else {
            index = 6;
        }
    } else if (event.code === "ArrowRight") { // der er klikket på højre-pilen'
        // din kode her...
        if (index < 6) {
            index++;
        } else {
            index = 1;
        }
    }


    newImg = "images/wallpaper-gallery/wallpaper" + index + ".jpg";
    bigImg.setAttribute("src", newImg);
};