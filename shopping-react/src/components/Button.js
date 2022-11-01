import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#5A65E9',
        color: '#FFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button