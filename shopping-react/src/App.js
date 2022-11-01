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
    ]
  }
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addCart={() => console.log('Nothing')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
