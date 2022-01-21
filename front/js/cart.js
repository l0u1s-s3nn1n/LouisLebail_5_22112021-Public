
//localStorage.setItem ("clé","valeur") ENREGISTRE
//localStorage.getItem("clé") RECUPERE
//localStorage.clear(); EFFACE
//JSON.stringify(objet) TRANSFORME données complexes en string 
//JSON.parse(string) TRANSFORME string en objet
// Produit
//Récupérer les données du localstorage enregistrées dans product.js
let recupererLocalStorage = localStorage.getItem("cartProduct");
let parseLocalStorage = JSON.parse(recupererLocalStorage);
console.log(parseLocalStorage);


//HTML à modifié
let cartItems = document.querySelector("#cart__items");

if (parseLocalStorage === null) {
    //Si le panier est vide
    const EmptyCart = `
    
          <div>
              <div>
                  Le panier est vide
              </div>
          </div>
          `;
    productsInCart.innerHTML = EmptyCart;
  }
  else {
