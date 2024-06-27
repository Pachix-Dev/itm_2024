export function checkHomepage() {
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/en' || window.location.pathname === '/en/';
    const menu = document.querySelector('.menu');
    if (menu) {
      if (isHomepage) {
        menu.classList.add('homepage-menu');
      } else {
        menu.classList.remove('homepage-menu');
      }
    }
  }