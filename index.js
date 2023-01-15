const menuToggle = document.getElementById("menu-toggle-btn");
const navbar = document.querySelector(".navbar");
const closeBtn = document.getElementById("close-btn");
const topSearchBtn = document.getElementById("search-btn");
const phoneSearchBtn = document.querySelector(".phone-search-btn");
const input = document.querySelector(".search-input");
const img = document.querySelector(".home-page-img");

const podcast = document.querySelector(".main-heading-pod");
const podcastCards = document.querySelector(".podcast-card-container");
const blog = document.querySelector(".main-heading-blog");
const blogCards = document.querySelector(".blog-card-container");

const main = document.querySelector(".main");
const interviewSection = document.querySelector(".interview-section");
const footer = document.querySelector(".footer");

menuToggle.addEventListener("click", function(){
    navbar.classList.add("visible");
    closeBtn.classList.add("visible");
    topSearchBtn.classList.add("invisible");
});

closeBtn.addEventListener("click", function(){
    navbar.classList.remove("visible");
    closeBtn.classList.remove("visible");
    
    setTimeout(() => {
        topSearchBtn.classList.remove("invisible");
        
    }, 350);
    
    // $(phoneSearchBtn).fadeIn(150);
});

main.addEventListener("click", function(){
    navbar.classList.remove("visible");
});

interviewSection.addEventListener("click", function(){
    navbar.classList.remove("visible");
});

footer.addEventListener("click", function(){
    navbar.classList.remove("visible");
});

img.addEventListener("click", function(){
    navbar.classList.remove("visible");
    closeBtn.classList.remove("visible");
    topSearchBtn.classList.remove("invisible");
});

blog.addEventListener("click", function(){
    blogCards.classList.add("visible");

    podcastCards.classList.add("fade");
    blogCards.classList.remove("fade");
});

podcast.addEventListener("click", function(){
    podcastCards.classList.remove("fade");
    blogCards.classList.add("fade");
});

phoneSearchBtn.addEventListener("click", function(){
    console.log("Clicked");
    // phoneSearchBtn.animate.fadeOut(200);

    setTimeout(() => {
        $(input).addClass("visible").animate({width: "+=85%"});
        
    }, 150);
    $(phoneSearchBtn).fadeOut(150);
    
});

topSearchBtn.addEventListener("click", function(){
    console.log("Clicked");
    // phoneSearchBtn.animate.fadeOut(200);

    setTimeout(() => {
        $(input).addClass("visible").animate({width: "+=85%"});
        
    }, 150);
    $(phoneSearchBtn).fadeOut(150);
    
});
