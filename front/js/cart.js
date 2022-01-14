
//localStorage.setItem ("clé","valeur") ENREGISTRE
//localStorage.getItem("clé") RECUPERE
//localStorage.clear(); EFFACE
//JSON.stringify(objet) TRANSFORME données complexes en string 
//JSON.parse(string) TRANSFORME string en objet
// Produit
//Récupérer les données du localstorage enregistrées dans product.js
let recupererLocalStorage = localStorage.getItem("product");
let parseLocalStorage = JSON.parse(recupererLocalStorage);
console.log(parseLocalStorage);

let cartItems = document.querySelector("#cart__items");
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

            window.location.href = '/confirmation.html?orderid = ' + data.orderId;
        } else {
            alert('Une erreur est survenue');
        }
    })
})