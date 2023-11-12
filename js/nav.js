//hamburger
let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.burger');

function toggleMenu () {  
    burger.addEventListener('click', () => {   
        navbar.classList.toggle('open-nav');
    });    
    // faire défilier les listes de menu une à  une
    let navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {    
        navbar.classList.toggle('open-nav');
        }); 
    })
    
}

//déclaration de la fonction:
toggleMenu();



// Marquer le lien de la page actuelle comme actif, à l'exception de la liste "Mon compte" et "Se connecter"
const navbarLinks = document.querySelectorAll(".navbar a");
const currentURL = window.location.href;

navbarLinks.forEach(link => {
  if (link.href === currentURL && !link.parentElement.classList.contains("fifth")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Rendre le lien disabled de la page courante

navbarLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("disabled");
  }
});

  