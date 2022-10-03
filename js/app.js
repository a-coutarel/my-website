gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const titreSpansH1 = document.querySelectorAll('h1 span');
const titreSpansH2 = document.querySelectorAll('h2 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const logos = document.querySelectorAll('.bulle'); 
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


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

    
    gsap.to(".discover-title", {scrollTrigger: {trigger: ".discover-title", start: "top bottom", toggleActions: "restart pause resume pause"}, opacity: 1, duration: 1.8, ease: "power2"});
    gsap.to(".discover-profile", {scrollTrigger: {trigger: ".discover-profile", start: "top bottom", toggleActions: "restart pause resume pause"}, opacity: 1, duration: 2, ease: "power2"});
    
    
    gsap.to(".education-title", {scrollTrigger: {trigger: ".education-title", toggleActions: "restart pause resume pause", start: "top bottom", end: "bottom center", scrub: 1}, left:"50%", xPercent:-50, ease: "power2"});
    gsap.to(".education-list", {scrollTrigger: {trigger: ".education-list", toggleActions: "restart pause resume pause", start: "top bottom", end: "top center", scrub: 1}, right:"50%", xPercent:50, ease: "power2"});


    gsap.to(".projects", {scrollTrigger: {trigger: ".projects", start:"200px bottom", end: "-200px top", toggleActions: "restart pause resume pause", scrub: 3}, opacity: 1, ease: "power2"});

    let nb = 0;

    document.querySelector('#leftbtn').addEventListener("click", () => {
        if(nb>0) {
            nb--;
            document.querySelector("#container-slider").style.transform = "translate("+(-nb*document.querySelector(".project-content").offsetWidth)+"px)";
        }
    });

    document.querySelector('#rightbtn').addEventListener("click", () => {
        if(nb<3) {    
            nb++;
            document.querySelector("#container-slider").style.transform = "translate("+(-nb*document.querySelector(".project-content").offsetWidth)+"px)";
        }
    });

    
    gsap.utils.toArray("section").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false 
        });
      });

    //gsap.to(".home", {scrollTrigger: {trigger: ".home", start: "top top", pin: true, pinSpacing: false}});
    //gsap.to(".discover", {scrollTrigger: {trigger: ".discover", start: "top top", pin: true, pinSpacing: false}});
    //gsap.to(".education", {scrollTrigger: {trigger: ".education", start: "top top", pin: true, pinSpacing: false}});
    //gsap.to(".projects", {scrollTrigger: {trigger: ".projects", start: "top top", pin: true, pinSpacing: false}});
    //gsap.to("footer", {scrollTrigger: {trigger: "footer", start: "top top", pin: true, pinSpacing: false}});
      
      ScrollTrigger.create({
        snap: {
            snapTo: 1 / (4 - 1),
            duration: 1,
            delay: 0,
            ease: "circ.inOut"
          }
      });

});