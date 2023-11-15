$(document).ready(function () {
    // Faire une requête AJAX pour récupérer des utilisateurs
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data) {
            // Traiter les données et afficher les cartes Bootstrap
            var users = data.results;
            var userCardsContainer = $('#userCards');

            users.forEach(function (user, index) {
                if (index % 2 === 0) {
                    // Commencer une nouvelle ligne pour chaque deux cartes
                    userCardsContainer.append('</div><div class="row">');
                }

                var userCard = `
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <div class="rounded-image d-flex align-items-center">
                                        <img src="${user.picture.large}" class="card-img-top" alt="User Image">
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                        <p class="card-text">${user.email}</p>
                                        <p class="card-text">${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                userCardsContainer.append(userCard);
            });
        },
        error: function (error) {
            console.log('Erreur lors de la récupération des utilisateurs :', error);
        }
    });
});