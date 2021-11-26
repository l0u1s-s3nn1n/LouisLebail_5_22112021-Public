//Récuperer la balise id dans le product.html
const id = new URLSearchParams(window.location.search).get('id');
//fetch permettant d'associé à des id ou des class une donnée de l'API en passant par le fichier json.
fetch('http://localhost:3000/api/products/'+id)
    .then(response => {
        return response.json()
    })
    .then(product => {
        console.log(product);
        document.querySelector('#title').innerText = product.name;
        document.querySelector('#price').innerText = product.price;
        document.querySelector('.item__img img').setAttribute("src", product.imageUrl);
        document.querySelector('#description').innerText = product.description;
    })
;


