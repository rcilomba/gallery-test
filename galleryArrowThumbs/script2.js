const bigImg = document.querySelector("photo");
const smallImgs = document.querySelectorAll(".thumb");

console.log(smallImgs);

for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].addEventListener("click", changePhoto);
}