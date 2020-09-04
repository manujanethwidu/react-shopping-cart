//ft1
import React from 'react';
import './App.css';
import data from './data.json'
import Products from './component/Products';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Ract Shopping Cart</a>
        </header>
        <main>

          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              CartItems
          </div>
          </div>
        </main>
        <footer>
          All Rights are recived
        </footer>
      </div>
    );
  }
}


export default App;
