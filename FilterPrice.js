import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class ProductCard extends React.Component {
  handleAddToCart = () => {
    this.props.addToCart(this.props.id);
  }

  render() {
    return (
      <div className="product-card col-12 col-md-3 bgTurquoise pt-4 pb-3 me-2">
        <div id="card" className='border'>
          <img className="img-fluid pt-4" src={require(`./assets/imagesEtLogo/images/${this.props.image}`)} alt={this.props.title} />
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <p className="price"><strong>Prix: {this.props.price} €</strong></p>
          <p><strong>Note: {this.props.note} /5</strong></p>
          <button onClick={this.handleAddToCart}>Ajouter au panier</button>
        </div>
      </div>
    );
  }
}

class FilterPrice extends React.Component {
  state = {
    products: [
        {
          id: 1,
          title: "Chocolat noisette cerise",
          description: "Ballotin de 150gr",
          note: 4.50,
          price: 12.99,
          image: "produit1.jpg",
          categories: ["Tous", "Chocolat au lait", "Fruit"]
        },
        {
          id: 2,
          title: "Chocolat au lait caramel",
          description: "Ballotin de 300gr",
          note: 3.50,
          price: 25.00,
          image: "produit2.jpg",
          categories: ["Tous", "Chocolat au lait", "Caramel"]
        },
        {
          id: 3,
          title: "Chocolat liqueur cerise",
          description: "Ballotin de 150gr",
          note: 4.00,
          price: 14.99,
          image: "produit3.jpg",
          categories: ["Tous", "Chocolat au lait", "Fruit", "Liqueur"]
        },
        {
          id: 4,
          title: "Chocolat blanc coeur",
          description: "Ballotin de 300gr",
          note: 4.80,
          price: 35.00,
          image: "produit4.1.jpg",
          categories: ["Tous", "Chocolat blanc"]
        },
        {
          id: 5,
          title: "Chocolat au lait noisette",
          description: "Ballotin de 300gr",
          note: 3.50,
          price: 25.00,
          image: "produit5.1.jpg",
          categories: ["Tous", "Chocolat au lait", "Noix-noisette"]
        },
        {
          id: 6,
          title: "Chocolat blanc et au lait",
          description: "Ballotin de 150gr",
          note: 4.50,
          price: 14.99,
          image: "produit6.1.jpg",
          categories: ["Tous", "Chocolat au lait", "chocolat blanc"]
        },
        {
          id: 7,
          title: "Rocher praliné à la fraise",
          description: "Ballotin de 150g",
          note: 3.00,
          price: 14.99,
          image: "produit7.jpg",
          categories: ["Tous", "Chocolat au lait", "Fruit"]
        },
        {
          id: 8,
          title: "Chocolat noir praliné",
          description: "Ballotin de 300g",
          note: 4.00,
          price: 25.00,
          image: "produit8.1.jpg",
          categories: ["Tous", "Chocolat noir"]
        },
        {
          id: 9,
          title: "Chocolat au lait praliné",
          description: "Ballotin de 300g",
          note: 2.50,
          price: 25.00,
          image: "produit9.1.jpg",
          categories: ["Tous", "Chocolat au lait"]
        }
      ],
    filters: ["Tous", "chocolat blanc", "Chocolat au lait", "Chocolat noir", "Noix-noisette", "Fruit", "Caramel", "Liqueur"],
    selectedFilters: ["Tous"],
    minPrice: "0",
    maxPrice: "100",
  }

  handleAddToCart = (productId) => {
    const productToAdd = this.state.products.find(product => product.id === productId);
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, productToAdd]
    }));
  }

  handleFilterChange = (filter) => {
    let selectedFilters = [...this.state.selectedFilters];
    if (selectedFilters.includes(filter)) {
      selectedFilters = selectedFilters.filter(f => f !== filter);
    } else {
      selectedFilters.push(filter);
    }
    this.setState({ selectedFilters });
  }

  handleMinPriceChange = (event) => {
    this.setState({ minPrice: event.target.value });
  }

  handleMaxPriceChange = (event) => {
    this.setState({ maxPrice: event.target.value });
  }

  render() {
    let rows = [];
    let products = this.state.products.filter(product => {
      const selectedFilters = this.state.selectedFilters;
      const minPrice = this.state.minPrice;
      const maxPrice = this.state.maxPrice;
      const matchFilters = selectedFilters.includes("Tous") || selectedFilters.some(f => product.categories.includes(f));
      const matchMinPrice = minPrice === "0" || product.price >= minPrice;
      const matchMaxPrice = maxPrice === "100" || product.price <= maxPrice;
      return matchFilters && matchMinPrice && matchMaxPrice;
    });

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
      rows.push(<div className="row" key={i}>{row}</div>);
    }

    return (
      <div>
        <div className='bgYellow col-12 col-md-2 col-lg-2' id='filtre'>
        <h4>Filtre</h4>
        <span className="label"><strong>Catégories:</strong></span>
          <div>
            {this.state.filters.map(filter => (
              <label key={filter} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={this.state.selectedFilters.includes(filter)}
                  onChange={() => this.handleFilterChange(filter)}
                />
                {filter}
              </label>
            ))}
          </div>
          <div>
            <span className="label"><strong>Prix:</strong></span>
                <label>
                Prix minimum:
                <input
                    type="number"
                    value={this.state.minPrice}
                    onChange={this.handleMinPriceChange}
                />
                </label>
                <label>
                Prix maximum:
                <input
                    type="number"
                    value={this.state.maxPrice}
                    onChange={this.handleMaxPriceChange}
                />
                </label>
            </div>
            </div>
            <div className="container">
            {rows}
            </div>
        </div>
    );
  }
}

export default FilterPrice;

