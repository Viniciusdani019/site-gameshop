// >> Comando de animação para o botão Hangurg da visão mobile
// inicio-------------------------------------------------------
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});
