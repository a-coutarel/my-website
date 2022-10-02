gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const titreSpansH1 = document.querySelectorAll('h1 span');
const titreSpansH2 = document.querySelectorAll('h2 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const logos = document.querySelectorAll('.bulle'); 
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

/*document.querySelector('.b1').addEventListener("click", () => {
    var element = document.querySelector("#discover");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

document.querySelector('.b2').addEventListener("click", () => {
    var element = document.querySelector("#education");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
});

document.querySelector('.b3').addEventListener("click", () => {
    var element = document.querySelector("#projects");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
});*/



window.addEventListener("load", () => {
    $("preloader").delay(400).fadeOut('slow');

    document.querySelector('.b1').addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo: {y: "#discover"}, ease: "power2"});
    });
    
    document.querySelector('.b2').addEventListener("click", () => {
        gsap.to(window, {duration: 1.5, scrollTo: {y: "#education"}, ease: "power2"});
    });
    
    document.querySelector('.b3').addEventListener("click", () => {
        gsap.to(window, {duration: 1.5, scrollTo: {y: "#projects"}, ease: "power2"});
    });

    let TL = gsap.timeline({paused: true});

    TL.staggerFrom(titreSpansH1, 1.2, {opacity: 0, ease: "power2.but"}, 0.3);
    TL.staggerFrom(titreSpansH2, 1.2, {top: -50, opacity: 0, ease: "power2.but"}, 0.3, '-=1');
    TL.staggerFrom(btns, 1.2, {opacity: 0, ease: "power2.but"}, 0.3, '-=1.5');
    TL.from(l1, 2.5, {width: 0, ease: "power2.but"}, '');
    TL.from(l2, 2.5, {width: 0, ease: "power2.but"}, '');
    TL.from(logo, 1.5, {left: -100, rotate: -360, ease: "power2.but"}, '');
    TL.staggerFrom(logos, 1, {right: -200, ease: "power2.but"}, 0.3, '-=1.2');
    
    setTimeout( () => {TL.play()}, 600);

    gsap.to(".home", {scrollTrigger: {trigger: ".home", start: "top top", pin: true, pinSpacing: false}});
    gsap.to(".discover", {scrollTrigger: {trigger: ".discover", start: "top top", pin: true, pinSpacing: false}});
    gsap.to(".education", {scrollTrigger: {trigger: ".education", start: "top top", pin: true, pinSpacing: false}});
    gsap.to(".projects", {scrollTrigger: {trigger: ".projects", start: "top top", pin: true, pinSpacing: false}});
    gsap.to("footer", {scrollTrigger: {trigger: "footer", start: "top top", pin: true, pinSpacing: false}});

    
    gsap.to(".wai", {scrollTrigger: {trigger: ".wai", toggleActions: "restart pause resume pause"}, opacity: 1, duration: 1.8, ease: "power2"});
    gsap.to(".profile", {scrollTrigger: {trigger: ".profile", toggleActions: "restart pause resume pause"}, opacity: 1, duration: 2, ease: "power2"});
    
    
    gsap.to(".educationTitle", {scrollTrigger: {trigger: ".educationTitle", toggleActions: "restart pause resume pause", end: "bottom center", scrub: 1}, left:"50%", xPercent:-50, ease: "power2"});
    gsap.to(".list-education", {scrollTrigger: {trigger: ".list-education", toggleActions: "restart pause resume pause", end: "top center", scrub: 1}, right:"50%", xPercent:50, ease: "power2"});


    gsap.to(".projects", {scrollTrigger: {trigger: ".projects", start:"200px bottom", end: "-200px top", toggleActions: "restart pause resume pause", scrub: 3}, opacity: 1, ease: "power2"});

    let nb = 0;

    document.querySelector('#leftbtn').addEventListener("click", () => {
        if(nb>0) {
            nb--;
            document.querySelector("#container-slider").style.transform = "translate("+(-nb*document.querySelector(".project").offsetWidth)+"px)";
        }
    });

    document.querySelector('#rightbtn').addEventListener("click", () => {
        if(nb<3) {    
            nb++;
            document.querySelector("#container-slider").style.transform = "translate("+(-nb*document.querySelector(".project").offsetWidth)+"px)";
        }
    });

    let panels = gsap.utils.toArray("section"),
    scrollTween;

    function goToSection(i) {
    scrollTween = gsap.to(window, {
        scrollTo: {y: i * innerHeight, autoKill: false},
        duration: 1.4,
        ease: "power2",
        onComplete: () => scrollTween = null,
        overwrite: true
    });
    }

    panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
    });
    })

});