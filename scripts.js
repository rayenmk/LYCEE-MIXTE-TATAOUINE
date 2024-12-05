// Exemple : Recherche de livres
document.querySelector("#library form").addEventListener("submit", function(event) {
    event.preventDefault();
    const query = event.target.querySelector("input").value;
    alert("Recherche effectuée pour : " + query);
});
