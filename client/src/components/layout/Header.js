import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Header</h1>
        </header>
    )

}

const headerStyle={
    background: '#C0C0C0',
    color: '#fff',
    textAlign: 'center',
    padding: '8px'
}
export default Header;