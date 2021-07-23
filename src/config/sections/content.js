import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function() {

    const contentSections = document.querySelectorAll('.content__section');  

    const sectionBtns = document.querySelectorAll('content__section_btn');
    const sectionUpBtn = document.querySelector('btn_up')  
    const sectionDownBtn = document.querySelector('btn_down')
    
    // contentSections.forEach((section)=>{
    //     gsap.to(window, {
    //         scrollTrigger: {
    //             trigger: section,
    //             toggleActions: "restart none restart none"
    //         },
    //         duration: 0,
    //         scrollTo: section
    //     })
    // })
}