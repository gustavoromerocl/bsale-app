const container = document.querySelector('#products');

//Se agreaga listener cuando el dom tiene los elementos cargados
window.addEventListener('DOMContentLoaded', () => {
  //se consume la api y se cargan los datos en el componente que crea la funcion createCard
  fetch('http://localhost:8080/api/products').then((res) => res.json()).then((data) => {
    data.map(({url_image, name, price}) => {
      createCard(url_image, name, price)
    });
});
createCard()
})

//crea lo elementos necesarios en el dom con las clases de bootstrap
function createCard(url_image, title, price){
  //creando elementos
  let columnContainer = document.createElement('div');
  let cardContainer = document.createElement('div');
  let productImage = document.createElement('img');
  let infoContainer = document.createElement('div'); 
  let titulo = document.createElement('h5');
  let precio = document.createElement('p');

  //anidando los nodos
  container.appendChild(columnContainer);
  columnContainer.appendChild(cardContainer)
  cardContainer.appendChild(productImage);
  cardContainer.appendChild(infoContainer);
  infoContainer.appendChild(titulo);
  infoContainer.appendChild(precio);

  //agrando las clases de bootstrap
  container.classList.add('row','row-cols-1', 'row-cols-md-4', 'g-4');
  columnContainer.classList.add('col');
  cardContainer.style.width = '15rem';
  cardContainer.style.marginRight = '1rem';
  cardContainer.classList.add('card');
  productImage.classList.add('card-img-top');
  infoContainer.classList.add('card-body');
  titulo.classList.add('card-title');
  precio.classList.add('card-text');

  //se carga la imagen y se pasa la info de titulo y precio consumidos desde el api de node
  productImage.src = url_image;
  titulo.innerHTML = title;
  precio.innerHTML = price;
}