import { Component } from 'react'

const styles = {
    detailCart: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.2)',
        borderRadius: '15px',
        width: '300px',
        right: 25,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
    },
}

class DetailCart extends Component {
    render() {
        const { cart } = this.props

        return (
            <div style={styles.detailCart}>
                <ul style={styles.ul}>
                    {cart.map(x =>
                        <li style={styles.product} key={x.name}>
                            <img alt={x.name} src={x.img} width='40' height='40' />
                            {x.name}
                            
                            <span> Amout: {x.amount} </span>
                        </li>)}
                </ul>
            </div>

        )
    }
}

export default DetailCart