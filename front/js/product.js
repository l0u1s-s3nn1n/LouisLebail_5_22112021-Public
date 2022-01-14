//Récuperaration des données produit
const id = new URLSearchParams(window.location.search).get('id');
//Récupération des données depuis l'API, avec la spécification de l'ID correspondant à un produit.
fetch('http://localhost:3000/api/products/'+id)
	//Convertion des données récupérées en fichier JSON
    .then(response => {
        return response.json();
    })
	//Grâce au retour JSON, injection des données dans le DOM de la page product de façon dynamique.
    .then(product => {
		console.log(product);
        document.querySelector('#title').innerText = product.name;
        document.querySelector('#price').innerText = product.price;
		document.querySelector('.item__img img').setAttribute("src", product.imageUrl);
		document.querySelector('.item__img > img').setAttribute("alt", product.altTxt);
		document.querySelector('#description').innerText = product.description;
		//boucle nécessaire pour le choix des couleurs
		let colors = product.colors;
		for (let color of colors) {
		let option = document.createElement("option");
		option.value = color;
		option.innerText = color;
		document.getElementById("colors").appendChild(option);
		}
	});

//Gestion du panier
let ajoutProduitPanier = () => {
	//options à modifier
	let colors = document.querySelector("#colors");
	let quantity = document.querySelector('#quantity');
	let description = document.querySelector('#description');
	let imageUrl = document.querySelector('.item__img img')
	// Crée l'objet dans le localStorage
	let sauvegarderInfosPanier = localStorage.getItem('product');
	let sauvegarderTableauPanier = [];
	if (sauvegarderInfosPanier !== null) {
		sauvegarderTableauPanier = JSON.parse(sauvegarderInfosPanier);
	}
    //Spécification des options de produits 
	let optionProduct = {
		_id: id,
		colors: colors.value,
		quantity: quantity.value,
		description: description.innerText,
		image: imageUrl.getAttribute('src'),
		
	}

	// Ajout produit sélectionné dans le localStorage
		sauvegarderTableauPanier.push(optionProduct);
		localStorage.setItem('product', JSON.stringify(sauvegarderTableauPanier));
		//notifAdd();
}


//Générer un ajout de données dans le localstorage, au click sur "Ajouter au Panier", ici dans le localstorage.
document.querySelector('#addToCart').addEventListener('click', ()=> {
	ajoutProduitPanier();
});
