/* MENU */

const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const items = menu.querySelectorAll('li');

const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(menu, {
  y: 0,
  duration: 0.5,
  ease: "power4.out"
}).from(items, {
  opacity: 0,
  y: 40,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1
}, "-=0.3");

toggle.addEventListener('click', () => {
  tl.reversed() ? tl.play() : tl.reverse();
});




/* CURSOR */

const cursorCircle = document.getElementById('cursor-circle');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursorCircle.style.transform = `translate(${x - 10}px, ${y - 10}px)`; 
});





/* HOME */

gsap.from("#home-h1",{
  y:-600,
  duration:1.5,
  ease: Bounce.easeOut,
});

gsap.from("#reflection",{
  y:600,
  duration:1.5,
  ease: Bounce.easeOut,
});

gsap.from("#menuToggle",{
  y:-300,
  delay:0.5,
});

gsap.to("#home-h1",{
  delay:2,
  scale:1.1,
  duration:0.4,
  ease: "elastic.out(1, 0.1)",
  yoyo:true,
  repeat:3,  
});

gsap.to("#reflection",{
  delay:2,
  scale:1.1,
  duration:0.4,
  ease: "elastic.out(1, 0.1)",
  yoyo:true,
  repeat:3,
});






