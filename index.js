document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navBar = document.getElementById("nav-bar");

    hamburger.addEventListener("click", function() {
        navBar.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});

window.addEventListener("load", function() {
    const mainHead = document.querySelector('.main-head');
    if (mainHead) {
        mainHead.classList.add('animate');
    }
});
