const include = filename => document.writeln(`<script type='text/javascript' src='js/${filename}.js'></script>`);

include("clipboard");

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
};

if (browserIsMobile()) include("mobile");

include(browserIsMobile() ? "light-mobile" : "light-desktop");

