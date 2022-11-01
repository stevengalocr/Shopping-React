import { Component } from 'react'

const Styles = {
    button: {
        backgroundColor: '#0A283E',
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
            <button style={Styles.button} {...this.props} />
        )
    }
}

export default Button