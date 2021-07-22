import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function() {

    const activitySections = document.querySelectorAll('.activity__section');    
    
    activitySections.forEach((section)=>{
        gsap.to(window, {
            scrollTrigger: {
                trigger: section,
                toggleActions: "restart none restart none"
            },
            duration: 0,
            scrollTo: section
        })
    })
}