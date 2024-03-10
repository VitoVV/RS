import React from 'react';
import { Button } from './Button';
import '../App.css';
import '../components/HeroSection.css';
import { Image, Heading, VStack } from "@chakra-ui/react";

const greeting = "LITTLE LEMON" ;
const bio1 = "We are a family owned Mediterranean restaurant,";
const bio2 = "focused on traditional recipes served with a modern twist.";


function HeroSection () {

return(
        
        <div className='hero-container'>
        
    <VStack spacing={16}>
        <VStack spacing={4}>
          <Image  src="./images/logo 2.png" htmlWidth='1800' margin='-300' /> 
          
     </VStack>
      
        <VStack spacing={4}>
          <Heading color='white'>  {bio1}  </Heading>
          <Heading color='white'>  {bio2}  </Heading>
        </VStack>
      </VStack>
        
        
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        > 
            Nothing here
        </Button>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
        > 
           Reserve table <i className='fa fa-play-circle' />
        </Button>
        </div>
        </div>
        
    
)
}

export default HeroSection;