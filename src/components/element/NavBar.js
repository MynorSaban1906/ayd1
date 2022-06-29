import React from 'react'
import SplitButton from './SplitButton'
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();

  const RegistrarServicio = () => {
    navigate('/registroServicioTercerizado')
  }


  return (
    <>
      <nav className='navBar-app'>
        <div className='navBar-container'>
          <div className='navBar-ul'>
            <img id="logo" src="https://res.cloudinary.com/alex4191/image/upload/v1655242087/FullTrip/FullTripLogo.png" alt="MyLogo" />
            <div>
              <input className="search"></input>
            </div>
            <div class='menu-navbar'>
              <button onClick={RegistrarServicio}> Prestar Servicio</button>
              <SplitButton />
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar