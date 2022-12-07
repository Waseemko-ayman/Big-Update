let myButton = document.getElementById("group");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

myButton.onclick = function () {
    window.scrollTo(0, 0);
}

/**************************************************************/