import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
};

useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
}, []);

  return (
    <div className={'nav ${show && "nav__black"}'}>
        <div className='nav__contents'>
            <img
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    // src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
                    // src="https://www.pngfind.com/pngs/m/55-551539_castlevania-png-castlevania-netflix-logo-png-transparent-png.png"
                    // src='https://w7.pngwing.com/pngs/1001/291/png-transparent-gift-card-netflix-amazon-com-television-gift-miscellaneous-text-logo.png'
                    alt='Netflix Logo'
                />

                <img
                    className='nav__avatar'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQgyNNJLE_mfMOs9xcBaWQ1MOlG7ecngstA&usqp=CAU'
                    alt='Avatar Logo'
                />
        </div>

     
      
    </div>
  )
}

export default Nav
