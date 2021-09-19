const el = document.getElementById('topnav-icon');
const topnav = document.getElementById('topnav');
el.addEventListener('click', (e) => {
  e.preventDefault();
  el.classList.toggle('opened');
  el.setAttribute('aria-expanded', el.classList.contains('opened'));
  topnav.classList.toggle('responsive');
});

const menuLinks = document.querySelectorAll('.topnav .link');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    const anchor = e.target.href.split('#').slice(-1);
    const top = document.getElementById(anchor).offsetTop;
    window.scrollTo({
      left: 0,
      top,
      behavior: 'smooth'
    });
  })
});
