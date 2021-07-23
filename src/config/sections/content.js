import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { add } from 'lodash';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function() {

    const contentSections = document.querySelectorAll('.content__section');  

    const sectionUpBtn = document.querySelector('.btn_up')  
    const sectionDownBtn = document.querySelector('.btn_down')

    const CURRENT_SECTION_CLASS = 'current_section'
    const NEXT_SECTION_CLASS = 'next_section'
    const PREVIOUS_SECTION_CLASS = 'previous_section'

    contentSections.forEach((section)=>{
        ScrollTrigger.create({
            trigger: section,
            toggleClass: {targets: section, className: CURRENT_SECTION_CLASS},
            end: 'top',
            scrollTo: section
        })
    })    

    sectionDownBtn.addEventListener('click',()=>{
        const currentSection = document.querySelector('.current_section');
        const nextSection = currentSection.nextElementSibling;
        nextSection.classList.add(NEXT_SECTION_CLASS);
        gsap.to(window, {
            duration: 0.5,
            scrollTo: '.next_section'
        })
        nextSection.classList.remove(NEXT_SECTION_CLASS);
    })

    sectionUpBtn.addEventListener('click',()=>{
        const currentSection = document.querySelector('.current_section');
        const previousSection = currentSection.previousElementSibling;
        previousSection.classList.add(PREVIOUS_SECTION_CLASS);
        gsap.to(window, {
            duration: 0.5,
            scrollTo: '.previous_section'
        })
        previousSection.classList.remove(PREVIOUS_SECTION_CLASS)
    })
}
    
