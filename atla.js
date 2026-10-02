/* =====================================================
   ELEMENTS
===================================================== */

const introScreen = document.getElementById("introScreen");
const mainSite = document.getElementById("mainSite");

const enterBtn = document.getElementById("enterBtn");

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");

const letterOverlay = document.getElementById("letterOverlay");

const petals = document.getElementById("petals");

const avatarMusic = document.getElementById("avatarMusic");
const letterMusic = document.getElementById("letterMusic");


/* =====================================================
   ENTER WEBSITE
===================================================== */

enterBtn.addEventListener("click", () => {

    /*
        The first user interaction allows
        the browser to start the music.
    */

    avatarMusic.currentTime = 0;

    avatarMusic.play().catch((error) => {
        console.log("Avatar music could not autoplay:", error);
    });


    /* Intro animation */

    introScreen.classList.add("leave");


    setTimeout(() => {

        introScreen.style.display = "none";

        mainSite.classList.add("active");

    }, 1000);

});


/* =====================================================
   OPEN LETTER
===================================================== */

openLetter.addEventListener("click", () => {

    /* Stop Avatar's Love */

    avatarMusic.pause();

    avatarMusic.currentTime = 0;


    /* Start About You */

    letterMusic.currentTime = 0;

    letterMusic.play().catch((error) => {
        console.log("Letter music could not play:", error);
    });


    /* Show letter */

    letterOverlay.classList.add("show");

});


/* =====================================================
   CLOSE LETTER
===================================================== */

function closeLetterWindow() {

    letterOverlay.classList.remove("show");


    /* Stop About You */

    letterMusic.pause();

    letterMusic.currentTime = 0;


    /* Resume Avatar's Love */

    avatarMusic.currentTime = 0;

    avatarMusic.play().catch((error) => {
        console.log("Avatar music could not resume:", error);
    });

}


closeLetter.addEventListener(
    "click",
    closeLetterWindow
);


/* =====================================================
   CLICK OUTSIDE LETTER
===================================================== */

letterOverlay.addEventListener("click", (event) => {

    if (event.target === letterOverlay) {

        closeLetterWindow();

    }

});


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        letterOverlay.classList.contains("show")
    ) {

        closeLetterWindow();

    }

});


/* =====================================================
   FALLING PINK PETALS
===================================================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "falling-petal";


    /* Random horizontal position */

    petal.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        7 + Math.random() * 8;

    petal.style.width =
        size + "px";

    petal.style.height =
        size * 1.5 + "px";


    /* Random fall speed */

    const duration =
        7 + Math.random() * 8;

    petal.style.animationDuration =
        duration + "s, " +
        (1.5 + Math.random() * 2) + "s";


    /* Random delay */

    petal.style.animationDelay =
        Math.random() * 3 + "s, 0s";


    petals.appendChild(petal);


    /* Remove after animation */

    setTimeout(() => {

        petal.remove();

    }, (duration + 4) * 1000);

}


/* =====================================================
   START PETALS
===================================================== */

for (let i = 0; i < 18; i++) {

    setTimeout(() => {

        createPetal();

    }, i * 250);

}


setInterval(() => {

    createPetal();

}, 650);