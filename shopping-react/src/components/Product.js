import { Component } from 'react'

class Product extends Component {
    render() {
        const { product } = this.props
        return (
            <div>
                <img alt={product.name} src={product.img} width={'250'} height={'300'}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        )
    }
}

export default Product