//bouton remise en haut

document.getElementById('backtotop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Slide
$(document).ready(function () {
    // Activer le carrousel avec les options spécifiées
    $('#heroCarousel').carousel({
      interval: 3000, // Changement automatique
      pause: 'hover' // Pause lorsque la souris survole le carrousel
    });

    // Navigation manuelle avec les flèches
    $('.carousel-control-prev').click(function () {
      $('#heroCarousel').carousel('prev');
    });

    $('.carousel-control-next').click(function () {
      $('#heroCarousel').carousel('next');
    });
  });