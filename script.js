// ==============================
// LOADER
// ==============================

window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

  }, 1200);

});

// ==============================
// HEADER DINÂMICO
// ==============================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    header.classList.add('active');

  }else{

    header.classList.remove('active');

  }

});

// ==============================
// CONTADOR ANIMADO
// ==============================

const counters = document.querySelectorAll('.counter');

let started = false;

window.addEventListener('scroll', () => {

  const section = document.querySelector('.estatisticas');

  const sectionTop = section.offsetTop - 400;

  if(window.scrollY > sectionTop && !started){

    counters.forEach(counter => {

      let start = 0;

      const end = counter.getAttribute('data-target');

      const speed = end / 100;

      const updateCounter = () => {

        start += speed;

        counter.innerText = Math.floor(start);

        if(start < end){

          requestAnimationFrame(updateCounter);

        }else{

          counter.innerText = end + "%";

        }

      };

      updateCounter();

    });

    started = true;

  }

});

// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.2
});

cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform = "translateY(40px)";

  card.style.transition = "0.7s";

  observer.observe(card);

});

// ==============================
// BOTÃO TOPO
// ==============================

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

  if(window.scrollY > 500){

    topBtn.style.display = "block";

  }else{

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener('click', () => {

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

});

// ==============================
// FORMULÁRIO
// ==============================

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {

  e.preventDefault();

  alert('Mensagem enviada com sucesso!');

  formulario.reset();

});

// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.querySelector('.menu-mobile');

const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {

  if(nav.style.display === "block"){

    nav.style.display = "none";

  }else{

    nav.style.display = "block";

  }

});

// ==============================
// PARALLAX HERO
// ==============================

window.addEventListener('scroll', () => {

  const hero = document.querySelector('.hero');

  hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";

});

// ==============================
// CONSOLE
// ==============================

console.log("EcoFood carregado com sucesso!");