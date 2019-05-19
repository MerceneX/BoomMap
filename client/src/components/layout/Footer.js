import React from 'react';

function Footer(){
    return (
        <footer style={footerStyle}>
            <h1>Footer</h1>
        </footer>
    )

}

const footerStyle={
    background: '#D3D3D3',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}
export default Footer;