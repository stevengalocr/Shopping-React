import { Component } from 'react'

const styles = {
    layout: {
        backgroundColor: '#FFF',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '1200px',

    }
}

class Layout extends Component {
    render() {
        return (
            <div styles={styles.layout} >
                <div styles={styles.container}>

                    {this.props.children}


                </div>
            </div>
        )
    }
}

export default Layout