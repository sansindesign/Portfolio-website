let toggleNavStatus = false;

let toggleNav = function () {
    let getSlidebar = document.querySelector(".nav-slidebar");
    let getSlidebarUl = document.querySelector(".nav-slidebar ul");
    let getSlidebarLinks = document.querySelectorAll(".nav-slidebar a");

    if (toggleNavStatus === false) {
        getSlidebarUl.style.visibility = "visible";
        getSlidebar.style.height = "100vh";

        let arrayLength = getSlidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSlidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;

    }

    else if (toggleNavStatus === true) {
        getSlidebar.style.height = "0px";

        let arrayLength = getSlidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSlidebarLinks[i].style.opacity = "0";
        }


        getSlidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;

    }
}
