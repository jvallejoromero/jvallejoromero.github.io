const pics = ["san-jose.jpg", "board.jpg", "studio-screen.jpg", "html.jpg"];
const destinations = [".about-section", ".education-section", ".hobbies-section", ".goals-section"];
const loadedPics = [];
let count = 0;

$(window).on("load", function() {
    pics.forEach(pic => {
        preloadImage(`../images/${pic}`);
    });
    count = 0;
    usePreloadedImages();
});

function preloadImage(url) {
    var img = new Image();
    img.src = url;
    loadedPics[count] = img;
    count++;
}

function usePreloadedImages() {
    loadedPics.forEach(pic => {
        let element = document.querySelector(destinations[count]);
        element.style.backgroundImage = "url(" + pic.src + ")";
        count++;
    });
}