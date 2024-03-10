import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon:'fa fa-facebook-square',
    url: "https://www.facebook.com/",
  },
  {
    icon:'fa fa-twitter-square',
    url: "https://twitter.com/",
  },
  {
    icon:'fa fa-linkedin-square',
    url: "https://www.linkedin.com",
  },
  {
    icon:'fa fa-medium',
    url: "https://medium.com",
  },
  {
    icon:'fa fa-stack-overflow ',
    url: "https://stackoverflow.com",
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 820) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize', showButton);

  return (
    <>
   

    <nav className='navbar'>
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={20}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
         
          <HStack spacing={15}>
            {socials.map(({icon,url})=>(
              <a 
              href={url}
              key={icon}
              > 
               <i className={icon} size="1x" />
              </a>
            ))}      
            </HStack>  
            </HStack> 
          
        </Box>
    </Box>
    <nav>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fa fa-lemon-o'/>
           LITTLE LEMON
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-bars' : 'fa fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              to='/' className='nav-links' 
              onClick={closeMobileMenu}
              >
              HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICE
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MENU
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                
              </Link>
            </li>
          </ul>
            {button && <Button buttonStyle='btn--outline'>RESERVE</Button>}
        </div>
      </nav>
      </nav>
 
    </>
  );
}

export default Navbar;
