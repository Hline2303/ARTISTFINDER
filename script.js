console.log("connecté !");

const refresh = document.getElementById("refresh");
const resultat = document.getElementById("resultat");
// console.log(resultat);

// Récupéraion des données envoyées par l'API
async function getImg() {
  //   console.log("test depuis getImg");
  // Intégration de la gestion d'erreur
  try {
    // Fetch (Emission d'une requête)
    const reponseJSON = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=a98Qr-mP4bEkdhcW_I_sj49HYVk_zcgwozLhI9WC2kI"
    );
    console.log(reponseJSON);
    // Transformation en JS
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);

    // Affichage des informations dans la page
    resultat.innerHTML = `
        <img src="${reponseJS.urls.regular}" alt="${reponseJS.description}" class="img-artist"/>
<h1>Artiste : ${reponseJS.user.name}</h1>
<p>Découvrez son univers : ${reponseJS.user.bio ? reponseJS.user.bio : "Désolé, information manquante"}</p>
<div class="btn">
    <a href="https://instagram.com/${reponseJS.user.instagram_username}" class="btn-insta">
        Je découvre sur Instagram
    </a>
</div>
        `
  } catch (error) {
    // Gestion des erreurs
    console.log(error, "erreur");
  }
}

getImg();

refresh.addEventListener('click', getImg);