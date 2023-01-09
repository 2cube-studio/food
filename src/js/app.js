import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import MagneticButton from './functions/magnetic-button';

MagneticButton();


gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});



/* */


var tl2 = gsap.timeline();

tl2
    .to(".onine", { top: "17px", left: "329px" }, 0)
    .to(".pan", { top: "73px", left: "240px" }, 0)
    .to(".lot", { top: "125px", left: "321px" }, 0)
    .to(".laving", { top: "191px", left: "267px" }, 0)
    .to(".grlica", { top: "224px", left: "242px" }, 0)
    .to(".marich", { top: "152px", left: "177px" }, 0)
    .to(".green_mirch", { top: "268px", left: "302px" }, 0)
    .to(".pizaa_tomto", { bottom: "170px", left: "220px" }, 0)
    .to(".pizza_cut", { bottom: "47px", left: "301px" }, 0);

ScrollTrigger.create({
    trigger: '.our_food_section',
    scroller: ".smooth-scroll",
    scrub: true,
    start: "top top",
    end: "+=150%",
    pin: true,
    animation: tl2
})




var tl = gsap.timeline();
tl
    .to(".Add_section .add_box img:nth-child(1)", { top: '40%' }, 0)
    .to(".Add_section .add_box img:nth-child(2)", { top: '36%' }, 0)
    .to(".Add_section .add_box img:nth-child(3)", { top: '39%' }, 0)
    .to(".Add_section .add_box img:nth-child(5)", { bottom: '35%' }, 0)
    .to(".Add_section .add_box img:nth-child(6)", { bottom: '30%' }, 0)

ScrollTrigger.create({
    scroller: ".smooth-scroll",
    scrub: true,
    trigger: '.Add_section',
    start: "top top",
    end: "+=150%",
    pin: true,
    animation: tl
})








/* */



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();