$(document).ready(function() {
    $(window).scroll(function() {
        // console.log(this.scrollY);
        if (this.scrollY > 20) {
            // console.log("here");
            $('.navbar').addClass("sticky");
        } else {
            // console.log("here now");
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        let navList = document.querySelector(".menu");
        // console.log('navlist:', navList, navList.classList.contains("active"));

        if (navList.classList.contains("active")) {
            //remove 404 image if menu active
            let fofImage = document.querySelector(".fof-error .error-img");
            if (fofImage != null) {fofImage.setAttribute("src", "");}
        } else {
            //add 404 image when menu disactivates
            let fofImage = document.querySelector(".fof-error .error-img");
            if (fofImage != null) {fofImage.setAttribute("src", "images/fof-2.png");}
        }

        let currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        if (currentPage.toLocaleLowerCase() === "" || currentPage.toLocaleLowerCase() === "index.html") {
            let cursorBlink = document.querySelector(".text-2 span.typed-cursor");
            if (navList.classList.contains("active")) {
                // remove cursor blink if menu active
                document.querySelector('.home-content').style.visibility = "hidden";
                if (cursorBlink != null) {cursorBlink.style.color = "rgba(255, 255, 255, 0)";}
            } else {
                // add cursor blink if menu disactive
                document.querySelector('.home-content').style.visibility = "visible";
                if (cursorBlink != null) {cursorBlink.style.color = "rgba(255, 0, 43, 0.445)";}
            }
        } 

        if (navList.classList.contains("active") && !navList.innerHTML.startsWith('<li><a href="/">Home</a></li><li>')) {
            // console.log("click event: added list items");
            navList.innerHTML = '<li><a href="/">Home</a></li><li><a href="about.html">About</a></li><li><a href="projects.html">Projects</a></li><li><a href="services.html">Services</a></li><li><a href="contact.html">Contact</a></li>';

        } else if (!navList.classList.contains("active") && !navList.innerHTML.startsWith('<li><a href="#">About</a></li>')) {
            // console.log("click event: removed list items");
            navList.innerHTML = '<li><a href="about.html">About</a></li><li><a href="projects.html">Projects</a></li><li><a href="services.html">Services</a></li><li><a href="/">Home</a></li>';
        }
    });
    $(window).resize(function() {
        // update page nav links
        let navList = document.querySelector(".menu");
        if (document.body.clientWidth >= 947 && !navList.innerHTML.startsWith('<li><a href="about.html">About</a></li>')) {
            // console.log("resize event: removed list items");
            navList.innerHTML = '<li><a href="about.html">About</a></li><li><a href="projects.html">Projects</a></li><li><a href="services.html">Services</a></li><li><a href="/">Home</a></li>';
        } else if (document.body.clientWidth < 947 && !navList.innerHTML.startsWith('<li><a href="#">Home</a></li>')) {
            // console.log("resive event: added list items");
            navList.innerHTML = '<li><a href="/">Home</a></li><li><a href="about.html">About</a></li><li><a href="projects.html">Projects</a></li><li><a href="services.html">Services</a></li><li><a href="contact.html">Contact</a></li>';
        }

        if (navList.classList.contains("active")) {
            document.querySelector('.home-content').style.visibility = "hidden";
        } else {
            document.querySelector('.home-content').style.visibility = "visible";
        }

        // update typing cursor
        let currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        if (currentPage.toLocaleLowerCase() === "" || currentPage.toLocaleLowerCase() === "index.html") {
            let cursorBlink = document.querySelector(".text-2 span.typed-cursor");
            if (cursorBlink == null) {return;}

            let navList = document.querySelector(".menu");

            if (document.body.clientWidth >= 947 && cursorBlink.style.color !== "rgba(255, 0, 43, 0.445)") {
                cursorBlink.style.color = "rgba(255, 0, 43, 0.445)";
            } else if (document.body.clientWidth < 947 && navList.classList.contains("active") && cursorBlink.style.color !== "rgba(255, 255, 255, 0)") {
                cursorBlink.style.color = "rgba(255, 255, 255, 0)";
            }
        } 
    });
})
