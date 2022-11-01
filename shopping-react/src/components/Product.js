import { Component } from 'react'
import Button from './Button'


const styles = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '25%',
        padding: '10px 15px',
        borderRadius: '8px'
    },
    img: {
        width: '100%',
    }
}

class Product extends Component {
    render() {
        const { product, addCart } = this.props
        return (
            <div style={styles.product}>
                <img style= {styles.img} alt={product.name} src={product.img} width={'250'} height={'300'}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={() => addCart(product)}>
                    Add Cart
                </Button>
            </div>
        )
    }
}

export default Product