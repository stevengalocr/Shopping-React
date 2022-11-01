import { Component } from 'react'
import Product from './Product'

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}

class Products extends Component {
    render() {
        const { products, addCart } = this.props

            return(
                <div style={styles.products}>
                    {products.map(product =>
                    <Product
                        addCart={() => addCart (product)}
                        key={product.name}
                        product={product}
                    />)}
                </div>
            )
    }
}

export default Products;