/*Création d'une variable constante avec les photos du slider */
const slide = ["/imagesEtLogo/images/accueil1.jpg", "/imagesEtLogo/images/accueil2.jpg", "/imagesEtLogo/images/accueil3.jpg"];
let numero = 0;
/*création de la fonction des flèches et de leur sens pour passer d'une photo à l'autre */
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
/* mis un intervalle de 5 secondes entre les images quand le slide est automatique */    
    setInterval("ChangeSlide(1)", 5000);
}

/* Création des cartes, avec le tableau et les éléments à créer */
const produit = [
  {nom: 'Chocolat noisette cerise', image: "/imagesEtLogo/images/produit1.1.jpg", description: "Ballotin de 150gr", prix: 12.99, categorie: ["Tous", "Chocolat au lait", "Fruit"], note: 4.5, button : "Ajouter au panier"},
  {nom: 'Chocolat au lait caramel', image: '/imagesEtLogo/images/produit2.1.jpg', description: "Ballotin de 300gr", prix: 25.00, categorie: ["Tous", "Chocolat au lait", "Caramel"], note: 3.5, button : "Ajouter au panier"},
  {nom: 'Chocolat liqueur cerise', image: '/imagesEtLogo/images/produit3.1.jpg', description: "Ballotin de 150gr", prix: 14.99, categorie: ["Tous", "Chocolat au lait", "Fruit", "Liqueur"], note: 4.0, button : "Ajouter au panier"},
  {nom: 'Chocolat blanc coeur', image: '/imagesEtLogo/images/produit4.2.jpg', description: "Ballotin de 300gr", prix: 35.00, categorie: ["Tous", "Chocolat blanc"], note: 4.8, button : "Ajouter au panier"},
  {nom: 'Chocolat au lait noisette', image: "/imagesEtLogo/images/produit5.2.jpg", description: "Ballotin de 300gr", prix: 25.00,categorie: ["Tous", "Chocolat au lait", "Noix-noisette"], note: 3.5, button : "Ajouter au panier"},
  {nom: 'Chocolat blanc et au lait', image: '/imagesEtLogo/images/produit6.2.jpg', description: "Ballotin de 150gr", prix: 14.99,categorie: ["Tous", "Chocolat au lait", "chocolat blanc"], note: 4.5, button : "Ajouter au panier"},
  {nom: 'Rocher praliné à la fraise', image: '/imagesEtLogo/images/produit7.jpg', description: "Ballotin de 150g", prix: 14.99,categorie: ["Tous", "Chocolat au lait", "Fruit"], note: 3.0, button : "Ajouter au panier"},
  {nom: 'Chocolat noir praliné', image: '/imagesEtLogo/images/produit8.2.jpg',  description: "Ballotin de 300g", prix: 25.00, categorie: ["Tous", "Chocolat noir"], note: 4.0, button : "Ajouter au panier"},
  {nom: 'Chocolat au lait praliné', image: '/imagesEtLogo/images/produit9.2.jpg', description: "Ballotin de 300g", prix: 25.00,categorie: ["Tous", "Chocolat au lait"], note: 2.5, button : "Ajouter au panier"}
];

// Crée les cartes de produit
function createProductCards() {
  const productContainer = document.getElementById('product-container');
  let row = null;

  produit.forEach((produit, index) => {
    if (index % 3 === 0) {
      row = document.createElement('div');
      row.classList.add('product-row');
      productContainer.appendChild(row);
    }

    const card = document.createElement('div');
    card.classList.add('product-card');
    produit.categorie.forEach(categorie => {
      card.setAttribute('data-categorie', categorie);
    });

    const image = document.createElement('img');
    image.src = produit.image;
    const nom = document.createElement('h3');
    nom.innerText = produit.nom;
    const description = document.createElement('p');
    description.innerText = produit.description;
    const note = document.createElement('p');
    note.innerText = `Note : ${produit.note}*`;
    const prix = document.createElement('p');
    prix.innerText = `Prix : ${produit.prix} €`;
    const button = document.createElement('button');
    button.innerText = produit.button;
    card.appendChild(image);
    card.appendChild(nom);
    card.appendChild(description);
    card.appendChild(prix);
    card.appendChild(note);
    card.appendChild(button);

    row.appendChild(card);
  });
}

// Affiche les cartes de produit initiales
createProductCards();
// Récupère les éléments de catégorie
const categories = document.getElementsByName('categorie');

function filtrerProduit(produit, categoriesSelectionnees, prixMin, prixMax, noteMin, noteMax) {
  return produit.filter(produit => {
    const categorieMatch = produit.categorie.some(cat => categoriesSelectionnees.includes(cat));
    const prixMatch = (prixMin === '1' || produit.prix >= prixMin) && (prixMax === '100' || produit.prix <= prixMax);
    const noteMatch = (noteMin === '0' || produit.note >= parseFloat(noteMin)) && (noteMax === '5' || produit.note <= parseFloat(noteMax));
    return categorieMatch && prixMatch && noteMatch;
  });
}

function afficherProduit(produit) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';

  produit.forEach(produit => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    produit.categorie.forEach(categorie => {
      card.setAttribute('data-categorie', categorie);
    });

    const image = document.createElement('img');
    image.src = produit.image;
    const nom = document.createElement('h3');
    nom.innerText = produit.nom;
    const description = document.createElement('p');
    description.innerText = produit.description;
    const note = document.createElement('p');
    note.innerText = `Note : ${produit.note}*`;
    const prix = document.createElement('p');
    prix.innerText = `Prix : ${produit.prix} €`;
    const button = document.createElement('button');
    button.innerText = produit.button;
    card.appendChild(image);
    card.appendChild(nom);
    card.appendChild(description);
    card.appendChild(prix);
    card.appendChild(note);
    card.appendChild(button);

    productContainer.appendChild(card);
  });
}
// Récupère les éléments de catégories
function filtrerEtAfficherProduit() {
  const categoriesSelectionnees = [];
  categories.forEach(categorie => {
    if (categorie.checked) {
      categoriesSelectionnees.push(categorie.value);
    }
  });
// Récupère les éléments de prix et de note
  const prixMin = document.getElementById('prix-min').value;
  const prixMax = document.getElementById('prix-max').value;
  const noteMin = document.getElementById('note-min').value;
  const noteMax = document.getElementById('note-max').value;

  const produitFiltres = filtrerProduit(produit, categoriesSelectionnees, prixMin, prixMax, noteMin, noteMax);
  afficherProduit(produitFiltres);
}
// Ajoute les écouteurs d'événements pour les catégories, prix et notes
categories.forEach(categorie => {
  categorie.addEventListener('change', filtrerEtAfficherProduit);
});

const prixMinInput = document.getElementById('prix-min');
prixMinInput.addEventListener('input', filtrerEtAfficherProduit);

const prixMaxInput = document.getElementById('prix-max');
prixMaxInput.addEventListener('input', filtrerEtAfficherProduit);

const noteMinInput = document.getElementById('note-min');
noteMinInput.addEventListener('input', filtrerEtAfficherProduit);

const noteMaxInput = document.getElementById('note-max');
noteMaxInput.addEventListener('input', filtrerEtAfficherProduit);
// Applique le filtre initialement
filtrerEtAfficherProduit();