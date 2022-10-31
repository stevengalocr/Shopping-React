import { Component } from 'react'
import Products from './components/Products'

class App extends Component {
  state= {
    products: [
      {name: 'Short', price: '$65', img: '/products/Short.jpg'},
      {name: 'Biker', price: '$90', img: '/products/Biker.jpg'},
      {name: 'Top', price: '$70', img: '/products/Top.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Products
         addCart = {() => console.log('Nothing')}
         products = {this.state.products}
        />
      </div>
    )
  }
}


export default App;
