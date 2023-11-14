//bouton remise en haut

document.getElementById('backtotop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Slide
$(document).ready(function () {

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

//date du jour:
function getDateDuJour() {
  let aujourdHui = new Date();

  let jour = aujourdHui.getDate();
  let mois = aujourdHui.getMonth() + 1; // Notez l'ajout de 1 car les mois commencent à 0
  let annee = aujourdHui.getFullYear();

  // Formatage avec deux chiffres pour le jour et le mois
  let jourFormat = (jour < 10) ? '0' + jour : jour;
  let moisFormat = (mois < 10) ? '0' + mois : mois;

  // Concaténation dans le format "DD-MM-YYYY"
  let dateDuJour = jourFormat + '-' + moisFormat + '-' + annee;

  return dateDuJour;
}

// Exemple d'utilisation
let dateActuelle = getDateDuJour();
console.log(dateActuelle); // Affiche la date du jour au format "DD-MM-YYYY"


  //Archive pour articles revolus
  // Fonction pour ajouter la classe "archive" aux articles dont la date est antérieure à aujourd'hui
  function marquerArticlesArchives() {
    // Sélectionnez toutes les balises <article>
    const articles = document.querySelectorAll('article');

    // Parcourez chaque article
    articles.forEach(function (article) {
        // Trouvez la balise <p class="text-muted"> dans cet article
        const dateElement = article.querySelector('p.text-muted');

        // Vérifiez si la date est antérieure à aujourd'hui
        if (dateElement) {
            // Format de date supposé : "DD-MM-YYYY"
            const dateArticleParts = dateElement.textContent.split('-');
            const dateArticle = new Date(dateArticleParts[2], dateArticleParts[1] - 1, dateArticleParts[0]);
            const aujourdHui = new Date();

            if (dateArticle < aujourdHui) {
                // Ajoutez la classe "archive" à l'article
                article.classList.add('archive');
            }
        }
    });
}

// Appelez la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function () {
    marquerArticlesArchives();
});