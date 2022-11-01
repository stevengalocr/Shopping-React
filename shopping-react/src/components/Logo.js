import { Component } from 'react'

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2em',
        color: '#5A65E9',
    }
}

class Logo extends Component {
    render() {
        return (
            <div style = {styles.logo}> Shopping React</div>
        )
    }
}

export default Logo