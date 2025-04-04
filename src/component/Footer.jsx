import React from 'react'


function Footer() {
  return (
    <div className='footer' >
      <h1>FoodMarte</h1>
   
   <h2><a href="aPropos">A propos</a></h2>
     <p>La saveur parle d'elle même</p>
   <h2><a href="horaire">Horaire</a></h2>
   <p>Lundi au Samedi(6H-00H)</p>
     
     <p  className='bar'>
     <h4 className='face' >FACEBOOK</h4> 
       <h4 className='insta'>INSTAGRAM</h4> 
       <h4 className='twi'>TWITTER</h4> 
       <img src="./facebook-instagram-twitter-logo-png-transparent-images-thumbnail-1697953629-removebg-preview.png" alt="icone" />
     </p>
       
    </div>
    
  )
}

export default Footer