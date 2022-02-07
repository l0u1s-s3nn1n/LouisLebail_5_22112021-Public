//cart.JS
/*
let productTemplate = document.querySelector("#productTemplate");
parseLocalStorage.forEach(element => {

    let productNode = document.importNode(productTemplate.content, true);
   
    productNode.querySelector(".itemQuantity").innerText= element.quantity;
    cartItems.appendChild(productNode);
});
//Gestion du formulaire
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData(document.querySelector('.cart__order__form'));
    
    fetch('http://localhost:3000/api/products/order', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            contact: {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                address: data.get('address'),
                city: data.get('city'),
                email: data.get('email'),
            },
            products: ["product", "products"]
        })  
    }).then(response => {
        if (response.status === 201) {

            let data = response.json();

            window.location.href = 'http://127.0.0.1:5501/P5-louis/front/html/confirmation.html?orderid = ' + data.orderId;
        } else {
            alert('Une erreur est survenue');
        }
    })
})


//Générer un ajout de données dans le localstorage, au click sur "Ajouter au Panier", ici dans le localstorage.
let whenClickAjouter = document.querySelector('#addToCart').addEventListener('click', ()=> {
	ajoutProduitPanier();
	let popupText = window.confirm("Votre commande est en enregistrée ! Cliquez sur OK pour afficher votre panier.");
	window.open("./cart.html", "Nouvelle fenêtre", "",);


*/

/*//TEST boucle mise à jour quantité d'un même produit

ajouterSameProduct(id, quantity.value) =() => {
    for(item of panier){
       if(articleId == item.id){//si l'article ajouté correspond à un article du panier
          item.qté += qté; // modifier sa quantité
          return; //mettre fin à la fonction
       }
    }
    //les instructions suivantes ne seront exécutées que si l'article n'est pas déjà présent dans le panier
    panier.push({id: articleId, qté: qté});//ajouter l'article et sa quantité dans le panier
 }
    

test1:

else if (getProduct !== null) 
    for (i = 0; i < getProduct.length; i++) { 
        if (arrayProduct[i]._id == idProduct.id && arrayProduct[i].colors == select.value) {
            return(
                arrayProduct[i].quantityProduct++,
                console.log("quantityProduct++"),
                localStorage.setItem("produits", JSON.stringify(arrayProduct)),
                (arrayProduct = JSON.parse(localStorage.getItem("produits")))		
                );
        }
    }
    

    test2:

    for (let i = 0; i < arrayProduct.length; i++) {
    newQuantity += arrayProduct[i] + 'quantity.value';
    quantity.value = newQuantity;
  }
  
  
  
  
  
  