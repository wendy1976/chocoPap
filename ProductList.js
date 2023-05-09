import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Création de mon composant produit et rajout du bouton ajout au panier
class ProductCard extends React.Component {
  handleAddToCart = () => {
    this.props.addToCart(this.props.id);
  }
  render() {
    return (
      
      <div className="product-card col-12 col-md-4 bgTurquoise pb-4">
        <img className="img-fluid pt-4"src={require(`./assets/imagesEtLogo/images/${this.props.image}`)} alt={this.props.title} />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>     
        <p className="price"><strong>Prix: {this.props.price} €</strong></p>
        <p><strong>Note: {this.props.note}</strong></p>
        <button onClick={this.handleAddToCart}>Ajouter au panier</button>
      </div>
      
    )
  };
}

class ProductList extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "Chocolat noisette cerise",
        description: "This is product 1",
        note: 4.50,
        price: 10.99,
        image: "produit1.jpg"
      },
      {
        id: 2,
        title: "Chocolat au lait caramel",
        description: "This is product 2",
        note: 4.50,
        price: 19.99,
        image: "produit2.jpg"
      },
      {
        id: 3,
        title: "Chocolat liqueur cerise",
        description: "This is product 3",
        note: 4.50,
        price: 7.99,
        image: "produit3.jpg"
      },
      {
        id: 4,
        title: "Chocolat blanc coeur",
        description: "This is product 4",
        note: 4.50,
        price: 7.99,
        image: "produit4.1.jpg"
      },
      {
        id: 5,
        title: "Chocolat au lait noisette",
        description: "This is product 5",
        note: 4.50,
        price: 7.99,
        image: "produit5.1.jpg"
      },
      {
        id: 6,
        title: "Chocolat blanc et au lait",
        description: "This is product 6",
        note: 4.50,
        price: 7.99,
        image: "produit6.1.jpg"
      },
      {
        id: 7,
        title: "Rocher praliné à la fraise",
        description: "This is product 7",
        note: 4.50,
        price: 7.99,
        image: "produit7.jpg"
      },
      {
        id: 8,
        title: "Chocolat noir praliné",
        description: "This is product 8",
        note: 4.50,
        price: 7.99,
        image: "produit8.1.jpg"
      },
      {
        id: 9,
        title: "Chocolat au lait praliné",
        description: "This is product 9",
        note: 4.50,
        price: 7.99,
        image: "produit9.1.jpg"
      }
    ]
  }

 // pour activer l'ajout du produit au panier
  handleAddToCart = (productId) => {
    const productToAdd = this.state.products.find(product => product.id === productId);
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, productToAdd]
    }));
  }

 // pour mettre mes produits 3 par 3 dans ma grille
  render() {
    let rows = [];
    let products = this.state.products;
    for (let i = 0; i < products.length; i += 3) {
      let row = products.slice(i, i + 3).map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          note={product.note}
          price={product.price}
          image={product.image}
          addToCart={this.handleAddToCart}
        />
      ));
      rows.push(<div className="row">{row}</div>);
    }
// pour retourner le tire de mon composant de produits: la boutique
    return (
      <div className="container">
        <h1 className="text-center pt-5 pb-4 orange">BOUTIQUE</h1>
        {rows}
      </div>
    );
  }
}

export default ProductList;
