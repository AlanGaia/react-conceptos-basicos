import React from 'react';

//Component with Function Declaration (not best practice)

function Header() {
    const mainTitle = 'Tienda Virtual';

    return (
        <h1 className="header">{mainTitle}</h1>
    )
}

export default Header;