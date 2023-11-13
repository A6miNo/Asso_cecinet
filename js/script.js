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

  //Animation
  $(document).ready(function() {
    //  Animation image qui fait une rotation
    $("#img-anim").animate({ opacity: 1, deg: 360 }, {
      duration: 2000, 
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    });

  });

  $(document).ready(function() {
    $(window).scroll(function() {
      // Récupérer la position de l'élément par rapport au haut de la fenêtre
     const scrollPosition = $(this).scrollTop();
      
      // Récupérer la position de l'élément
      const elementPosition = $('.fadeInOnScroll').offset().top;
      
      // Calculer la distance entre l'élément et la position actuelle du scroll
      const distance = (elementPosition - scrollPosition);
      
      // Si l'élément est dans la vue (dans la fenêtre de vision)
      if (distance < $(window).height() - 50) {
        // Faire un fadeIn en réglant l'opacité sur 1
        $('.fadeInOnScroll').fadeTo(1000, 1);
      }
    });
  });


  //animation filtre
  $(document).ready(function() {
    $('categories btn').click(function(){
        let category=$(this).attr('data-category');
        $('actu').hide();
        $('.'+category).show()

    })
  })
