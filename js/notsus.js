let shittyWatermark = null;

$(window).on("load", function() {
    // setInterval(removeShittyWatermark, 1000);  
    findShittyWatermark();
    removeShittyWatermark();
});

function findShittyWatermark() {
    let allElems = $('body').find('*');
    for (i = 0; i < allElems.length; i++) {
        element = allElems[i];  
        if (element.innerHTML.includes('<a title="Hosted on free web hosting 000webhost.com.')) {
            shittyWatermark = element;
        } 
    }
}

function removeShittyWatermark() {
    if (shittyWatermark == null) return;
    if (shittyWatermark.innerHTML.includes('<a title="Hosted on free web hosting 000webhost.com.')) {
        shittyWatermark.innerHTML = " ";
    }
}