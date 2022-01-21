//Décalaration pour données de l'API par 'id' 
const id = new URLSearchParams(window.location.search).get('id');

//MODIFIER PAGE PRODUIT
//Récupération des données depuis l'API par id
fetch('http://localhost:3000/api/products/'+id)
	//Convertion des données récupérées en fichier JSON
    .then(response => {
        return response.json();
    })
	//E
    .then(product => {
		console.log(product);
        document.querySelector('#title').innerText = product.name;
        document.querySelector('#price').innerText = product.price;
		document.querySelector('.item__img img').setAttribute("src", product.imageUrl);
		document.querySelector('.item__img img').setAttribute("alt", product.altTxt);
		document.querySelector('#description').innerText = product.description;
		//boucle pour le choix des couleurs
		let colors = product.colors;
		for (let color of colors) {
		let option = document.createElement("option");
		option.value = color;
		option.innerText = color;
		document.getElementById("colors").appendChild(option);
		}
	});

//GESTION PANIER
let ajoutProduitPanier = () => {
	//Déclare les contenu à modifier
	let colors = document.querySelector("#colors");
	let quantity = document.querySelector('#quantity');
	//Récupère 
	let getProduct = localStorage.getItem('cartProduct');
	let arrayProduct = [];
	//Si panier non vide
	if (getProduct !== null) {
		arrayProduct = JSON.parse(getProduct);
	}
    //Spécification des options de produits 
	let optionProduct = {
		idProduct: id,
		colorsProduct: colors.value,
		quantityProduct: quantity.value,
	}

	// Ajout produit sélectionné dans le localStorage
		arrayProduct.push(optionProduct);
		localStorage.setItem('cartProduct', JSON.stringify(arrayProduct));
		//notifAdd();
}

//Exécute ajoutProduitPanier au click #addToCart
let ClickAjouterPanier = document.querySelector('#addToCart').addEventListener('click', ()=> {
	ajoutProduitPanier();
});

