// MOBILE
    
// remove unoptimized elements
document.querySelector(".keyboard").remove();
// document.querySelector(".light").remove();

// get cards
const cardFront = document.querySelector(".card.front");
const cardBack = document.querySelector(".card.back");

// initial remove unoptimized card styling
cardFront.style.transform = "rotateZ(0deg)";
cardFront.style["-webkit-transform"] = "rotateZ(0deg)";
cardFront.style.left = "0px";
cardBack.style.left = "0px";

// card style edits conditional on window size
let mobileCardWidth = "95%";
let mobileCardHeight = `${Math.floor(cardFront.offsetWidth * 0.572)}px`;
optimizeOneCardForMobile = (card) => {
    card.style.width = mobileCardWidth;
    card.style.height = mobileCardHeight;
    card.style["min-height"] = mobileCardHeight;
};

const optimizeCardsForMobile = (cardFront, cardBack) => {
    optimizeOneCardForMobile(cardFront);
    optimizeOneCardForMobile(cardBack);
};

optimizeCardsForMobile(cardFront, cardBack);

// adding event listener for window resize (mobile only)
window.addEventListener("resize", () => {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight; 
    optimizeCardsForMobile(cardFront, cardBack);
});
