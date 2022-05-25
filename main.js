window.addEventListener('scroll', onScroll)

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

ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 900
}).reveal(`
    #header,
    #quem-sou,
    #projetos,
    #experiencias`);