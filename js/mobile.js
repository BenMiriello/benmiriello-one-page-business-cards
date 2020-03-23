
// MOBILE

// detect mobile browser
let browserIsMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((mobileName) => {
        return navigator.userAgent.match(mobileName);
    });
}

if (browserIsMobile()) {
        
    // remove unoptimized elements
    document.querySelector(".keyboard").remove()
    document.querySelector(".light").remove()
    
    // get cards
    const cardFront = document.querySelector(".card.front")
    const cardBack = document.querySelector(".card.back")

    // initial card edits
    cardFront.style.transform = "rotateZ(0deg)"
    cardFront.style["-webkit-transform"] = "rotateZ(0deg)"
    cardFront.style.left = "0px"
    cardBack.style.left = "0px"

    // card style edits conditional on window size
    const optimizeCardsForMobile = (cardFront, cardBack) => {
        let mobileWidth = "95%"
        let mobileHeight = `${Math.floor(cardFront.offsetWidth * 0.572)}px`

        cardFront.style.width = mobileWidth
        cardFront.style.height = mobileHeight
        cardBack.style.width = mobileWidth
        cardBack.style.height = mobileHeight
    }

    optimizeCardsForMobile(cardFront, cardBack)

    // adding event listener for window resize (mobile only)
    window.addEventListener("resize", () => {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight; 
        optimizeCardsForMobile(cardFront, cardBack)  
    });
}

