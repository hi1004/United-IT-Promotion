import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function() {

    const contentSections = document.querySelectorAll('.content__section');    
    
    contentSections.forEach((section)=>{
        gsap.to(window, {
            scrollTrigger: {
                trigger: section,
                toggleActions: "restart none restart none",
                markers: true,
            },
            duration: 0,
            scrollTo: section,

        })
    })
}