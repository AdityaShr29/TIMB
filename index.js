// -------------------> display: none; the nav ul on clicing the search btn
// -------------------> nav closes automatically (on phone view) when any link is clicked

// const header = document.querySelector(".header");
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

const navLinks = document.querySelectorAll(".nav-links");

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
    
    setTimeout(() => {
        $(input).fadeOut(50);
        $(phoneSearchBtn).fadeIn(150);
    }, 350);
});

navLinks.forEach(link => {
    link.addEventListener("click", function(){
        navbar.classList.remove("visible");
        closeBtn.classList.remove("visible");
        
        setTimeout(() => {
            topSearchBtn.classList.remove("invisible");
            
        }, 350);
        
        setTimeout(() => {
            $(input).fadeOut(50);
            $(phoneSearchBtn).fadeIn(150);
        }, 350);
    });
    
});

img.addEventListener("click", function(){
    navbar.classList.remove("visible");
    closeBtn.classList.remove("visible");

    setTimeout(() => {
        topSearchBtn.classList.remove("invisible");
    }, 550);

    setTimeout(() => {
        $(input).fadeOut(50);
        $(phoneSearchBtn).fadeIn(150);
    }, 550);
    
    // ------------- DISAPPEAR SEARCH INPUT --------------------
    $(input).animate({width: "0"}).fadeOut(50);

    setTimeout(() => {
        
        navLinks.forEach((link) => {
            link.style.display = "block";
        });
        
    }, 350);

    setTimeout(() => {
        $(phoneSearchBtn).fadeIn(100);
    }, 500);
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
    // console.log("Clicked");
    // phoneSearchBtn.animate.fadeOut(200);

    const width = 575;

    if(window.innerWidth > width){

        // $(input).css("left", "-35vw");

        setTimeout(() => {
            $(input).addClass("visible").fadeIn(50).animate({width: "53vw"});
        }, 150);

        // ******************** NAVLINKS display:none; ON SEARCH BTN CODE code **********************

        setTimeout(() => {
            navLinks.forEach((link) => {
                link.style.display = "none";
            });

        }, 300);

    }else{
        
        setTimeout(() => {
            $(input).addClass("visible").fadeIn(50).animate({width: "85%"});
            
        }, 150);
    }
    
    $(phoneSearchBtn).fadeOut(150);

});

topSearchBtn.addEventListener("click", function(){
    // console.log("Clicked");
    // // phoneSearchBtn.animate.fadeOut(200);

    // setTimeout(() => {
    //     $(input).addClass("visible").fadeIn(150).animate({width: "+=85%"});
        
    // }, 150);
    // $(phoneSearchBtn).fadeOut(150);

    navbar.classList.add("visible");
    closeBtn.classList.add("visible");
    topSearchBtn.classList.add("invisible");

    const width = 575;

    if(window.innerWidth > width){

        // $(input).css("left", "-35vw");

        setTimeout(() => {
            $(input).addClass("visible").fadeIn(50).animate({width: "53vw"});
        }, 250);

        // ******************** NAVLINKS display:none; ON SEARCH BTN CODE code **********************

        setTimeout(() => {
            navLinks.forEach((link) => {
                link.style.display = "none";
            });

        }, 300);

    }else{
        
        setTimeout(() => {
            $(input).addClass("visible").fadeIn(50).animate({width: "85%"});
            
        }, 250);
    }
    
    $(phoneSearchBtn).fadeOut(150);
});
