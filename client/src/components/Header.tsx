import React from "react"

function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <img className="logo__img" src="./images/kettlebell.svg"/>
                    <h1 className="logo__text">Kilogram</h1>
            </div>
        </header>
    )
}

export default Header