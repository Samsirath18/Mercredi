import React from 'react'
import './NavBarStyle.css'

function NavBar() {
  return (
    <div>
        <header>
            <nav>
                <ul className='menu'>
                    <li> <a href="#Acuueil">Accueil</a></li>
                    <li><a href="#Profil">Profil</a></li>
                    <li><a href="#Form">Form</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar