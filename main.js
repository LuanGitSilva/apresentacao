window.addEventListener('scroll', onScroll)

/*-----------*/
var nome = prompt("Olá visitante, digite aqui seu nome para nos conhecermos melhor!");

var usuario = document.querySelector("#usuario") ;

usuario.textContent = "Olá, " + nome + ". Seja bem vindo. Eu sou Luan Silva, desenvolvedor front-end, e essa é a minha apresentação.";
/*------------*/

onScroll()
function onScroll() {
    showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 450) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const titulo = document.querySelector('h1');
typeWriter(titulo)


ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 900
}).reveal(`
    #header,
    #quem-sou,
    #projetos,
    #experiencias`);


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();