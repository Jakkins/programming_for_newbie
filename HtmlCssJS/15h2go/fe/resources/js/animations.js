let navbar = document.getElementById("stick_nav");
let container = document.getElementById("body_content");
let lateral_cards = document.getElementById("lateral_cards");

let lastScrollTop = 0;
window.onscroll = () => {
    if (window.pageYOffset < 166) { 
        navbar.style.top = window.pageYOffset + 'px';
    }
    else {
        navbar.style.top = "166px";
    }

    if (window.pageYOffset < 260) { 
        container.style.width = "584px";
        container.style.left = "33px";
        container.style.borderRadius = "8px";
    }
    else {
        container.style.width = "648px";
        container.style.left = "0px";
        container.style.borderRadius = "0px";
    }

    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) { // downscroll code
        if (st < 260) lateral_cards.style.top = 224 + 0.22*st + 'px';
    } else { // upscroll code
        if (st < 260) lateral_cards.style.top = (280 + (st-260)/260*56) + 'px';
    }
    lastScrollTop = st
}