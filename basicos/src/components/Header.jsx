import React from 'react';

//Component with Function Declaration (not best practice)
function Header({title}) {
    return (
      <h1 className="header">
        {title}
      </h1>
    )
}

export default Header;