const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a sessão passou da linha
  // quais dados vou precisar

  //o topo da seção
  const sectionTop = section.offsetTop

  // a altura da sesao
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo

  //a seçao termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  duration: 700,
  distance: '30px'
}).reveal(`#home,
 #home img,
  #home .stats,
   #services,
   #services header,
    #services .card,
    #about,
    #about header,
    #about content`)
