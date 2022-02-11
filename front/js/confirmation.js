const afficherCommande = () => {
    ////Récupère l'id dans l'url via searchParams
    let str = window.location.href;
    let url = new URL(str);
    let orderId = url.searchParams.get("id");
    //Insertion dans le DOM
    document.getElementById("orderId").innerText = `${orderId}. ` + "Merci pour votre commande.";
    //Vide le localstorage pour nouvelle commande
    localStorage.clear();
}
//Execute la fonction
afficherCommande();