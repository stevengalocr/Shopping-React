import { Component } from 'react'

const styles = {
    title: {
    marginBottom: '30px',
    color: '#303030'
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style = {styles.title}>Shopping React</h1>
        )
    }
}

export default Title