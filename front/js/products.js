//fetch permettant de récupérer depuis l'API l'ensemble des données "produits" disponibles dans l'API, puis de les récupérer dans un fichier json.
//Connection à l'API
fetch('http://localhost:3000/api/products/')
    //retour JSON
    .then(response => {
        return response.json()
    })
    //log données
    .then(data => {
        console.log(data);
//Exploitation des données récupérer dans l'API, envoyées dans le DOM.
        data.forEach(element => {
            document.querySelector('#items').innerHTML += '<a href="./product.html?id='+element._id+'">\n' +
                '            <article>\n' +
                '              <img src="'+element.imageUrl+'" alt="Lorem ipsum dolor sit amet, Kanap name1">\n' +
                '              <h3 class="productName">'+element.name+'1</h3>\n' +
                '              <p class="productDescription">'+element.description+'</p>\n' +
                '            </article>\n' +
                '          </a>';
        })
    })
;