import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetailCart from './DetailCart'

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 13,
        top: 16,
    }  
}

class Cart extends Component {
    render(){
        const { cart, isCartVisible, showCart } = this.props
        const amount = cart.reduce(( acc, el) => acc +el.amount, 0)

        return (
            <div>
                <span style={styles.bubble}>
                    {amount !== 0 ?
                    <BubbleAlert value = {amount}/> : null}
                </span>
                <button onClick={showCart} style = {styles.cart}>
                    Cart
                    
                </button>
                {isCartVisible ? <DetailCart cart={cart} /> : null}
               
            </div>            
        )
    }
}

export default Cart