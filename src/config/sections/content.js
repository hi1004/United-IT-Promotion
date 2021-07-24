import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { add } from 'lodash';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function() {

    const contentSections = document.querySelectorAll('.content__section');  

    const contentContainer = document.querySelector('.content__container');

    const sectionUpBtn = document.querySelector('.btn_up')  
    const sectionDownBtn = document.querySelector('.btn_down')

    const CURRENT_SECTION_CLASS = 'current_section'
    const NEXT_SECTION_CLASS = 'next_section'
    const PREVIOUS_SECTION_CLASS = 'previous_section'

    // ScrollTrigger.create({
    //     trigger: contentContainer,
    //     toggleClass: {targets: 'content__section_btn', className: 'btn_show'}
    // })

    contentSections.forEach((section)=>{
        ScrollTrigger.create({
            trigger: section,
            toggleClass: {targets: section, className: CURRENT_SECTION_CLASS},
            end: 'top -=5',
            scrollTo: section
        })
    })    

    sectionDownBtn.addEventListener('click',()=>{
        const currentSection = document.querySelector('.current_section');
        const nextSection = currentSection.nextElementSibling;
        let t1 = gsap.timeline();
        t1.to(nextSection,{
            onStart: ()=>{nextSection.classList.add(NEXT_SECTION_CLASS)}
        })
        t1.to(window, {
            duration: 0.3,
            scrollTo: '.next_section'
        });
        t1.to(nextSection,{
            onStart: ()=>{nextSection.classList.remove(NEXT_SECTION_CLASS)}
        })
    })

    sectionUpBtn.addEventListener('click',()=>{
        const currentSection = document.querySelector('.current_section');
        const previousSection = currentSection.previousElementSibling;
        let t1 = gsap.timeline();
        t1.to(previousSection,{
            onStart: ()=>{previousSection.classList.add(PREVIOUS_SECTION_CLASS)}
        })
        t1.to(window, {
            duration: 0.3,
            scrollTo: '.previous_section'
        });
        t1.to(previousSection,{
            onStart: ()=>{previousSection.classList.remove(PREVIOUS_SECTION_CLASS)}
        })    
    })
}
    
