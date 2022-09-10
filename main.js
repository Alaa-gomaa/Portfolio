let btn = document.querySelector(".button-up");
let checkBox = document.getElementById("checkbox");
let home = document.getElementById("home");
let about = document.getElementById("about");
let project = document.getElementById("project");
let skills = document.getElementById("skills");
let contact = document.getElementById("contact");
let toggelBtn = document.getElementById("toggel");
let mainUl = document.getElementById("main");
let dateNow = new Date();
let date = document.getElementById("date");
let experience = document.getElementById("experience");







//Closing Sidebar by Clicking Outside | Auto Close Sidebar When click on Link
document.onclick = function(e) {
    if (e.target.id !== "mainUl" && e.target.id !== "toggelBtn") {
        toggelBtn.classList.toggle("collapsed");
        // toggelBtn.setAttribute("aria-expanded", "false");
        mainUl.classList.remove("show");
    }
};

//  Change To Dark Mood
checkBox.addEventListener("change", () => {
    home.classList.toggle("dark");
    about.classList.toggle("dark1");
    project.classList.toggle("darky");
    skills.classList.toggle("dark1");
    contact.classList.toggle("black");
});

// To make scroll
window.onscroll = function() {
    if (window.scrollY >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";

    }
};
btn.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
// To Get the current year
date.innerHTML = dateNow.getFullYear();