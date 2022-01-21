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