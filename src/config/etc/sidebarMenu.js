export default function(){  

  /* SHOW MENU */
  const snCollapseLinks = document.querySelectorAll('.collapse__link');
  const snCollapseMenus = document.querySelectorAll('.collapse__menu');
  
  const showMenu = (toggleId, navbarId, bodyId) => {
    const snToggle = document.getElementById(toggleId),
      snNavBar = document.getElementById(navbarId),
      snBodyPadding = document.getElementById(bodyId);
    if (snToggle && snNavBar) {
      snToggle.addEventListener('click', () => {
        snNavBar.classList.toggle('expander');
        snBodyPadding.classList.toggle('body-pd');
        snCollapseLinks.forEach((snCollapseLink) => {
          snCollapseLink.classList.remove('rotate');          
        });
        snCollapseMenus.forEach((snCollapseMenu)=>{
          snCollapseMenu.classList.remove('showCollapse')
        })
      });
    }
    console.log(snBodyPadding);
  };
  showMenu('nav-toggle', 'navbar', 'body-pd');



  /* LINK CLICK EVENT */

  /* active link color & reset collapse menu */
  const snLinks = document.querySelectorAll('.side-nav__link');
  function linkActive() {
    snLinks.forEach((snLink) => snLink.classList.remove('color-active'));
    this.classList.add('color-active');    
    resetSnCollapse(); 
  }
  snLinks.forEach((snLink) => snLink.addEventListener('click', linkActive));

  /* toggle collapse menu */
  const snLinkLists = document.querySelectorAll('.collapse');
  const snNavBar = document.getElementById('navbar');
  function resetSnCollapse(){
    snLinkLists.forEach((snLinkList)=>{
      const snCollapseLink = snLinkList.querySelector('.collapse__link');
      const snCollapseMenu = snLinkList.querySelector('.collapse__menu'); 
      snCollapseLink.classList.remove('rotate');
      snCollapseMenu.classList.remove('showCollapse');
    })
  }
  function linkListCollapse(){
    snLinkLists.forEach((snLinkList)=>{
      const snCollapseLink = snLinkList.querySelector('.collapse__link');
      const snCollapseMenu = snLinkList.querySelector('.collapse__menu');
      snLinkList.addEventListener('click', ()=>{
        if (snNavBar.classList.contains('expander')){      
          console.log(snCollapseLink, snCollapseMenu)
          snCollapseLink.classList.toggle('rotate');
          snCollapseMenu.classList.toggle('showCollapse');
          console.log(snCollapseLink, snCollapseMenu)
        }
      })
    })
  }
  linkListCollapse()
}

