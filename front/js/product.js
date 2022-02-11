//Récupère l'id dans l'url via searchParams
let str = window.location.href;
let url = new URL(str);
let idProduct = url.searchParams.get("id");


//Récupère les données d'un produit selon l'ID
const recupereProduitParID = async () => {
    await fetch('http://localhost:3000/api/products/' + idProduct)
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((product) => {
        afficherLeProduit(product);
    })
}


//Affiche le produit récupérer dans le DOM
const afficherLeProduit = (product) => {
    console.log(product);
    //Balise title
    let titleDOM = document.getElementsByTagName("title");
    titleDOM.innerHTML = product.name;

    //Nom produit
    let nameDOM = document.getElementById("title");
    nameDOM.innerHTML = product.name;

    //Prix produit
    let priceDOM = document.getElementById("price");
    priceDOM.innerHTML = product.price;

    //Déscription produit
    let descriptionDOM = document.getElementById("description");
    descriptionDOM.innerHTML = product.description;
    
    //Image + alt produit
    let productImg = document.querySelector(".item__img img");
    productImg.setAttribute ("src", product.imageUrl);
    productImg.setAttribute ("alt", product.altTxt);
    //for pour le choix des valeurs couleurs
    for (let i of product.colors) {
        let optionColor = document.createElement("option");
        document.getElementById("colors").appendChild(optionColor);
        optionColor.innerHTML = i;
        optionColor.value = i;
    }
    
};
recupereProduitParID ();

//Enregistrement des données dans le local storage
const ajouterAuPanier = () => {
    
    //Evènements au "click"
    document.getElementById("addToCart").addEventListener("click", function () {
        let productColor = document.getElementById("colors").value;
        let productQuantity = document.getElementById("quantity").value;
        let productImg = document.querySelector(".item__img img").getAttribute("src");
        let productAlt = document.querySelector(".item__img img").getAttribute("alt");
        let productName = document.getElementById("title").innerText;
        let productPrice = document.getElementById("price").innerText;

        //Si couleur non valide, afficher alert
        if (productColor == 0) {
            alert("Choisissez une couleur SVP");
        } 

        //Si quantité non valide, afficher alert
        if (productQuantity < 1 || productQuantity > 100) {
            alert("Choisissez une quantité infèrieure à 100 SVP");
        } 

        // Si couleur et quantité : ok
        if (productColor && productQuantity != 0 && productColor && productQuantity <= 100 ) {
        
        //Stocker données produit dans le local storage    
        let optionsProduitStockees = {
            id : idProduct,
            quantity : productQuantity,
            color : productColor,
            //supprimer les éléments qui seront donc ajouter par un fetch dans le cart.js
           /* name : productName,
            imgUrl : productImg,
            altTxt : productAlt,
            price : productPrice*/

        };

        console.log(optionsProduitStockees);

        //Transforme le JSON dans le local storage en objet
        let parsedProduct = JSON.parse(localStorage.getItem("product"));
        
        //Si produit déjà enregistré :
        if (parsedProduct){
            // Si dans le produit enregistré : id et color existent, alors ajouter la quantity 
            const idAndColorExist = parsedProduct.find((el) => el.id === idProduct && el.color === productColor);
            
            if (idAndColorExist) {
    
                //parseInt pour additioner les quantity
                //Additionne quantity dans optionsProduitsStockees à l'ancienne quantity (idAndColorExist)
                let addQuantity = parseInt(optionsProduitStockees.quantity) + parseInt(idAndColorExist.quantity);
                //Ajoute nouvelle quantity au localstorage
                idAndColorExist.quantity = addQuantity;
                localStorage.setItem("product", JSON.stringify(parsedProduct));
                if (optionsProduitStockees.quantity == 1) {
                    alert (`${productQuantity} ${productName} a été ajouté au panier!`);
                }
                else {
                    alert (`${productQuantity} ${productName} ont été ajoutés au panier!`);
                    console.log(parsedProduct);
                }
            }else {
                //Mise à jour des options via push puis création d'un clé + valeur dans le localstorage
                parsedProduct.push(optionsProduitStockees);
                localStorage.setItem("product", JSON.stringify(parsedProduct))
                if (optionsProduitStockees.quantity == 1) {
                    alert (`${productQuantity} ${productName} a été ajouté au panier!`);
                }
                else {
                    alert (`${productQuantity} ${productName} ont été ajoutés au panier!`);
                    console.log(parsedProduct);
                }
            
            }
        } 
         
        //Si pas de produit enregistré :
        else {
            //Crée tableau vide
            parsedProduct = [];
            //Injecte les optionsProduitStockees
            parsedProduct.push(optionsProduitStockees);
            //Création clé valeur dans le localstorage
            localStorage.setItem("product", JSON.stringify(parsedProduct));
            if (optionsProduitStockees.quantity == 1) {
                alert (`${productQuantity} ${productName} ajouté au panier!`);
            }
            else {
                alert (`${productQuantity} ${productName} ont été ajoutés au panier!`);
                console.log(parsedProduct);
            }
        }

        } 
        
    })

};
ajouterAuPanier ();