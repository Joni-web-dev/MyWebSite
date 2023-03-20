/* <--------------- Sticky Navbar ---------------> */
const header = document.querySelector("header");

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener('scroll', stickyNavbar)
stickyNavbar();

/* <--------------- Scroll Animation ---------------> */
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", {origin:"top", delay: 700 });

/* <--------------- Skills Progress Bar Animation ---------------> */

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle")

window.addEventListener("scroll", () => {
    if(!skillsPlayed) skillsCounter();
    if(!mlPlayed) mlCounter();
})
 
function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 9);
    }
}

let mlPlayed = false;
let skillsPlayed = false;

function skillsCounter() {
    if(!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}

/* <--------------- Ml Section Animation ---------------> */

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

function mlCounter() {
    if(!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach(ctr => {
        let target = +ctr.dataset.target;
        
        setTimeout(() => {
            updateCount(ctr, target);
        }, 400)
    })
};

/* <--------------- Typing Animation ---------------> */

let typed = new Typed(".heading", {
    strings:["","Abdullaev Jonibek", "Web-Developer"],
    typeSpeed:100,
    BackSpeed:100,
    loop: true
});


let s = 5;

if (s == 5) {
    console.log("true");
}