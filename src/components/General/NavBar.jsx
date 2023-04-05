import React, { useState } from 'react'
import './styles/navBar.css'

const NavBar = ({setText}) => {
    const [logged, setLogged] = useState(true)

    const search = e => {
        setText(e.target.value)
    }
  return (
    <nav className='navBar_results'>
        <div className='navBar_results_input_container'>
            <input onChange={search} className='navBar_results_input' type="text" placeholder='Buscar'/>
            <i className="fa-solid fa-magnifying-glass navBar_results_input_icon"></i>
        </div>
        {
            logged
            ?
            <div className='navBar_user'>
                <i className="fa-solid fa-user user_icon"></i>
                <span className='navBar_user_name'>Eduardo</span>
            </div>
            :
            <div className='navBar_user'>
                <a className='navBar_user_notLogged' href="#">Log In</a>
                <a className='navBar_user_notLogged' href="#">Sign In</a>
            </div>
        }
    </nav>

  )
}

export default NavBar