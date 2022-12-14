import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Short', price: '$65', img: '/products/Short.jpg' },
      { name: 'Biker', price: '$90', img: '/products/Biker.jpg' },
      { name: 'Top', price: '$70', img: '/products/Top.jpg' },
    ],
    cart: [],
    isCartVisible: false,

  }

  addCart = (product) => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name ? ({
        ...x,
        amount: x.amount + 1
      })
        : x)
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length) {
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state

    return (
      <div>
        <Navbar cart={this.state.cart} isCartVisible={isCartVisible} showCart={this.showCart} />
        <Layout>
          <Title />
          <Products
            addCart={this.addCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
