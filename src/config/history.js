import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";





gsap.registerPlugin(ScrollTrigger,  MotionPathPlugin);


export default function() {


  /* History */
gsap.defaults({ease: "none"});

gsap.set(".ball", {xPercent: -50, yPercent: -50})

var tl = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01", {}, 0.2) 
.to(".ball03, .text02", {}, 0.33)
.to(".ball04, .text03", {}, 0.46)

gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
.add(tl, 0);
  
}