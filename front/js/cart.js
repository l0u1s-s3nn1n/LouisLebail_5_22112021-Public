//Get "product" depuis le local storage
let produitsDansLocalStorage = JSON.parse(localStorage.getItem("product"));

//----------Calcul du total panier
const calculPanier = () => {

  //Affiche quantité
  let totalQuantity = 0;
  //For each + parseInt pour iterer et ajouter la quantity
  console.log(totalQuantity);
    
  //Injection dans l'Id
  if (totalQuantity === undefined) {
    document.getElementById("totalQuantity").innerText = "0";

  }else {
    document.getElementById("totalQuantity").innerText = `${totalQuantity}`;
  }
  
  //Affiche prix
  let totalPrice = 0;
  produitsDansLocalStorage.forEach(el => totalPrice += parseInt(el.price) * parseInt(el.quantity));
  console.log(totalPrice);

  //Injection dans l'Id 
  if (totalPrice === undefined) {
    document.getElementById("totalPrice").innerText = `00` + ",00";
  } else {
    document.getElementById("totalPrice").innerText = `${totalPrice}` + ",00";
  }
  
}

//----------Affichage panier
const AfficherPanier = () => {

  // Si panier vide
  if (produitsDansLocalStorage == null) {
    document.querySelector("#cartAndFormContainer h1").innerHTML = `<h1> Votre panier est vide</p>`;
    document.getElementById("totalQuantity").innerText = "0";
    document.getElementById("totalPrice").innerText = `0` + ",00";
    const removeFormulaire = document.querySelector(".cart__order");
    removeFormulaire.remove();
  }

  // Si panier rempli
  else {
    let promesse = [];
  //Affichage produit(s) via DOM
  for (let j in produitsDansLocalStorage) {
      //intégrer fetch pour dynamiser les données qui n'apparaissent plus dans le storage 
      /*name : productName,
            imgUrl : productImg,
            altTxt : productAlt,
            price : productPrice*/
      //Récupère les données d'un produit selon l'ID
      let getDataApiToDisplay = (num) => {
        return new Promise((resolve, reject) => {
             fetch('http://localhost:3000/api/products/' + produitsDansLocalStorage[num].id)
          .then((response) => {
              console.log(response)
              return response.json();
          })
          .then((product) => {
            //AfficherPanier(product);
            //Promesse permettant de passer au then ensuite
              resolve(product);
            });
          })
      }
      promesse.push(getDataApiToDisplay(j).then((product) => {
        console.log(product);
        for (let k in produitsDansLocalStorage)  {
          if (produitsDansLocalStorage[k].id == product._id){
          produitsDansLocalStorage[k].name = product.name
          produitsDansLocalStorage[k].imgUrl = product.imageUrl
          produitsDansLocalStorage[k].altTxt = product.altTxt
          produitsDansLocalStorage[k].price = product.price
        }}
      }));
      
/*
    //Afficher les produits

    let createArticle = document.createElement("article");
    document.getElementById("cart__items").appendChild(createArticle);
    createArticle.className = "cart__item";
    createArticle.setAttribute("data-id", produitsDansLocalStorage[j].id)
    createArticle.setAttribute("data-color", produitsDansLocalStorage[j].color)
    
    //Div Image
    let createDivImg = document.createElement("div");
    createArticle.appendChild(createDivImg);
    createDivImg.className = "cart__item__img";

    //Img, src, alt
    let createImg = document.createElement("img");
    createDivImg.appendChild(createImg);
    createImg.setAttribute ("src", produitsDansLocalStorage[j].imgUrl);
    createImg.setAttribute ("alt", produitsDansLocalStorage[j].altTxt);
    
    //Div produit
    let createDivContent = document.createElement("div");
    createArticle.appendChild(createDivContent);
    createDivContent.className = "cart__item__content";
    
    //Div cart_item (nom du produit, couleur, prix) 
    let createDivDescription = document.createElement("div");
    createDivContent.appendChild(createDivDescription);
    createDivDescription.className = "cart__item__content__description";
  
    //nom du produit <h2>
    let createH2 = document.createElement("h2");
    createDivDescription.appendChild(createH2);
    createH2.innerText = produitsDansLocalStorage[j].name;
    //couleur <p>
    let createColorP = document.createElement("p");
    createDivDescription.appendChild(createColorP);
    createColorP.innerText = produitsDansLocalStorage[j].color;
    //prix <p>
    let createPriceP = document.createElement("p");
    createDivDescription.appendChild(createPriceP);
    createPriceP.innerText = produitsDansLocalStorage[j].price + ",00" + " €";
  
    //cart.html : <div class="cart__item__content__settings">
    let createQuantityDiv = document.createElement("div");
    createDivContent.appendChild(createQuantityDiv);
    createQuantityDiv.className = "cart__item__content__settings";
    
    //cart.html : <div class="cart__item__content__settings__quantity">
    let createInputDiv = document.createElement("div");
    createQuantityDiv.appendChild(createInputDiv);
    createInputDiv.className = "cart__item__content__settings__quantity";
  
    let createQuantityP = document.createElement("p");
    createInputDiv.appendChild(createQuantityP);
    createQuantityP.innerText = "Qté : ";
    
    let createQuantityInput = document.createElement("input");
    createInputDiv.appendChild(createQuantityInput);
    createQuantityInput.setAttribute("type", "number");
    createQuantityInput.className = "itemQuantity";
    createQuantityInput.setAttribute("name", "itemQuantity");
    createQuantityInput.setAttribute("min", "1");
    createQuantityInput.setAttribute("max", "100");
    createQuantityInput.setAttribute("value", produitsDansLocalStorage[j].quantity);
  
    //cart.html : <div class="cart__item__content__settings__delete">
    let createDeleteDiv = document.createElement("div");
    createQuantityDiv.appendChild(createDeleteDiv);
    createDeleteDiv.className = "cart__item__content__settings__delete";
  
    //cart.html : <p class="deleteItem">Supprimer</p>
    let createDeleteP = document.createElement("p");
    createDeleteDiv.appendChild(createDeleteP);
    createDeleteP.className = "deleteItem";
    createDeleteP.innerText = "Supprimer";*/
  }
    Promise.all(promesse).then( ()=>{
      for ( let j in produitsDansLocalStorage) {
        let createArticle = document.createElement("article");
    document.getElementById("cart__items").appendChild(createArticle);
    createArticle.className = "cart__item";
    createArticle.setAttribute("data-id", produitsDansLocalStorage[j].id)
    createArticle.setAttribute("data-color", produitsDansLocalStorage[j].color)
    
    //Div Image
    let createDivImg = document.createElement("div");
    createArticle.appendChild(createDivImg);
    createDivImg.className = "cart__item__img";

    //Img, src, alt
    let createImg = document.createElement("img");
    createDivImg.appendChild(createImg);
    createImg.setAttribute ("src", produitsDansLocalStorage[j].imgUrl);
    createImg.setAttribute ("alt", produitsDansLocalStorage[j].altTxt);
    
    //Div produit
    let createDivContent = document.createElement("div");
    createArticle.appendChild(createDivContent);
    createDivContent.className = "cart__item__content";
    
    //Div cart_item (nom du produit, couleur, prix) 
    let createDivDescription = document.createElement("div");
    createDivContent.appendChild(createDivDescription);
    createDivDescription.className = "cart__item__content__description";
  
    //nom du produit <h2>
    let createH2 = document.createElement("h2");
    createDivDescription.appendChild(createH2);
    createH2.innerText = produitsDansLocalStorage[j].name;
    //couleur <p>
    let createColorP = document.createElement("p");
    createDivDescription.appendChild(createColorP);
    createColorP.innerText = produitsDansLocalStorage[j].color;
    //prix <p>
    let createPriceP = document.createElement("p");
    createDivDescription.appendChild(createPriceP);
    createPriceP.innerText = produitsDansLocalStorage[j].price + ",00" + " €";
  
    //cart.html : <div class="cart__item__content__settings">
    let createQuantityDiv = document.createElement("div");
    createDivContent.appendChild(createQuantityDiv);
    createQuantityDiv.className = "cart__item__content__settings";
    
    //cart.html : <div class="cart__item__content__settings__quantity">
    let createInputDiv = document.createElement("div");
    createQuantityDiv.appendChild(createInputDiv);
    createInputDiv.className = "cart__item__content__settings__quantity";
  
    let createQuantityP = document.createElement("p");
    createInputDiv.appendChild(createQuantityP);
    createQuantityP.innerText = "Qté : ";
    
    let createQuantityInput = document.createElement("input");
    createInputDiv.appendChild(createQuantityInput);
    createQuantityInput.setAttribute("type", "number");
    createQuantityInput.className = "itemQuantity";
    createQuantityInput.setAttribute("name", "itemQuantity");
    createQuantityInput.setAttribute("min", "1");
    createQuantityInput.setAttribute("max", "100");
    createQuantityInput.setAttribute("value", produitsDansLocalStorage[j].quantity);
  
    //cart.html : <div class="cart__item__content__settings__delete">
    let createDeleteDiv = document.createElement("div");
    createQuantityDiv.appendChild(createDeleteDiv);
    createDeleteDiv.className = "cart__item__content__settings__delete";
  
    //cart.html : <p class="deleteItem">Supprimer</p>
    let createDeleteP = document.createElement("p");
    createDeleteDiv.appendChild(createDeleteP);
    createDeleteP.className = "deleteItem";
    createDeleteP.innerText = "Supprimer";
      }
      calculPanier();
    })

    

  }
  
};

AfficherPanier ();

//----------Supprimer produit

const supprimerProduit = () => {
  
     
       //Selectionne les classes pour régler la quantité
      const deleteItem = document.querySelectorAll(".deleteItem");
      console.log(deleteItem);
       //Evénements au click sur les boutons "supprimer"
      for (let l = 0; l < deleteItem.length; l++) {
        deleteItem[l].addEventListener("click", (event) => {
        event.preventDefault();
        //Supprime l'article du DOM
        let articleDOM = deleteItem[l].closest("article");
        articleDOM.remove();
        //Supprime en fonction de l'id/color
        let deleteById = produitsDansLocalStorage[l].id;
        let deleteByColor = produitsDansLocalStorage[l].color;
        produitsDansLocalStorage = produitsDansLocalStorage.filter(el => el.id != deleteById || el.color != deleteByColor);
        //MAJ localstorage
        localStorage.setItem("product", JSON.stringify(produitsDansLocalStorage));
        //Rafraichis la page avec les nouvelles données du storage local
        location.reload();
        //Supprime "product" du localstorage + nouveau calcul panier
        if (deleteItem.length == 1) {
          localStorage.clear();
          calculPanier();
        } else {
            calculPanier();
        }
        
        }
        
        )}

}

supprimerProduit ();

//----------Modifier quantité(s)

const modifierQuantitePanier = () => {
  //Selectionne les inputs pour régler la quantité
  const inputQuantite = document.querySelectorAll(".itemQuantity");
  //Indique qu'il faut changer la quantité des éléments du array
  inputQuantite.forEach(function (btn, index) {
    btn.addEventListener("change", function() {
        produitsDansLocalStorage = JSON.parse(localStorage.getItem("product"));
        produitsDansLocalStorage[index].quantity = btn.value;
      //MAJ localstorage
      localStorage.setItem("product", JSON.stringify(produitsDansLocalStorage));
      calculPanier();
    })
  })
}

modifierQuantitePanier();

//----------Gestion du formulaire

//Selectionne le <form method="get" class="cart__order__form">
const form = document.querySelector(".cart__order__form");

//Caractères autorisés dans les inputs
let regExName = new RegExp ("^[A-Za-z. 'àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ-]{2,20}$");
let regExAdress = new RegExp ("^[A-Za-z0-9. 'àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ-]{2,30}$");
let regExCity = new RegExp ("^[A-Za-z. 'àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ-]{2,20}$");
let regExEmail = new RegExp ("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");

//Verification des données 
//NOM
form.firstName.addEventListener("change", function() {
checkFirstName(this)
});

const checkFirstName = (inputFirstName) => {
  let checkfirstNameTest = regExName.test(inputFirstName.value);
  console.log(checkfirstNameTest);
  if (checkfirstNameTest == true) {
    document.getElementById("firstNameErrorMsg").innerText = ``;
    return true;
  } else {
    document.getElementById("firstNameErrorMsg").innerText = `Veuillez renseigner un prénom valide SVP.`;
    return false;
  }
}

//NOM DE FAMILLE
form.lastName.addEventListener("change", function() {
  checkLastName(this)
});

const checkLastName = (inputLastName) => {
  let checklastNameTest = regExName.test(inputLastName.value);
  console.log(checklastNameTest);
  if (checklastNameTest == true) {
    document.getElementById("lastNameErrorMsg").innerText = ``;
    return true;
  } else {
    document.getElementById("lastNameErrorMsg").innerText = `Veuillez renseigner un nom de famille valide SVP.`;
    return false;
  }
}

//ADRESSE
form.address.addEventListener("change", function() {
checkAddress(this)
});

const checkAddress = (inputAddress) => {
  let checkAddressTest = regExAdress.test(inputAddress.value);
  console.log(checkAddressTest);
  if (checkAddressTest == true) {
    document.getElementById("addressErrorMsg").innerText = ``;
    return true;
  } else {
    document.getElementById("addressErrorMsg").innerText = `Veuillez saisir une adresse valide SVP.`;
    return false;
  }
}

//VILLE
form.city.addEventListener("change", function() {
    checkCity(this)
});

const checkCity = (inputCity) => {
  let checkCityTest = regExCity.test(inputCity.value);
  console.log(checkCityTest);
  if (checkCityTest == true) {
    document.getElementById("cityErrorMsg").innerText = ``;
    return true;
  } else {
    document.getElementById("cityErrorMsg").innerText = `Veuillez renseigner une ville valide SVP.`;
    return false;
  }
}

//EMAIL
form.email.addEventListener("change", function() {
  checkEmail(this)
});

const checkEmail = (inputEmail) => {
  let checkEmailTest = regExEmail.test(inputEmail.value);
  console.log(checkEmailTest);
  if (checkEmailTest == true) {
    document.getElementById("emailErrorMsg").innerText = ``;
    return true;
  } else {
    document.getElementById("emailErrorMsg").innerText = `Veuillez renseigner un e-mail valide SVP.`;
    return false;
  }
  
}

//Evénement au click "submit" le formulaire + conditions + boucle
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (checkFirstName(form.firstName) && checkLastName(form.lastName) && checkAddress(form.address) && checkCity(form.city) && checkEmail(form.email)) {

    //tableau formulaire 
    let productId = [];
    //push avec id des produits client
    for (let p in produitsDansLocalStorage) {
      productId.push(produitsDansLocalStorage[p].id)
    };

    //Objet info clients + id produit(s)
    let orderInfo = {
      contact: {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      address: form.address.value,
      city: form.city.value,
      email: form.email.value
      },
      products: productId
    };
    
    console.log(orderInfo);


    //----------Envoi formulaire au serveur

    const envoiApi = fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json' 
    },
      body: JSON.stringify(orderInfo)
});
    envoiApi.then(async (response) => {
      try {
        const data = await response.json();
        console.log(data);
        localStorage.clear();
        document.location.href = `./confirmation.html?id=${data.orderId}`;

      } catch (e){
        console.log(e);
      }
    })

  } else {
    console.log("problème formulaire");
  }
  
});
