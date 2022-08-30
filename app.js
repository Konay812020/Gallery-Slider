var getimgs = document.querySelectorAll(".img");
console.log(getimgs); //NodeList

var getmodal = document.querySelector(".modal");
var getmodalimg = document.querySelector(".modal-img");
var getcaption = document.querySelector(".caption");
var getbtnclose = document.querySelector(".btn-close");

for (var x = 0; x < getimgs.length; x++) {
    getimgs[x].addEventListener("click", function () {
        shownow(this)
    })
}


function shownow(ele) {
    // console.log(ele);
    // console.log(ele.src);
    console.log(ele.alt)
}