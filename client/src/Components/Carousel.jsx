import React, {useState} from 'react'
import styled from 'styled-components'


// Aca estoy utilizando styled-component de React///    PARA INSTALARLO EJECUTA EL SIG COMANDO :  npm install --save styled-components
// Link al video  :  https://www.youtube.com/watch?v=EWO0WIATQ1g&t=1472s

const CarouselImg= styled.img`
max-width: 500px;
width: 100%;
height: auto;
opacity: 0;
transition: 1s;
&.loaded {
 opacity:1;
}
`;


const CarouselButtonContainer= styled.div`
display: flex;
align-content: center;
flex-direction: row;
margin-top: 15px;
`;

const CarouselButton= styled.button`
color: white;
background-color: #eb118a;
padding:8px;
margin: 0 5px;
`;



export default function Carousel (props) {
  
    const images = ["cafe1.jpg", "cafe2.jpg","cafe3.jpg"] 
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImage, setSelectedImage]= useState(images[0])
    const [loaded, setLoaded] = useState(false)
   
    const previous =()=> {
      const condition = selectedIndex > 0; 
      const nextIndex = condition ? selectedIndex - 1 : images.length-1;
      setSelectedImage(images[nextIndex]) // actualizo el selector
      setSelectedIndex(nextIndex)
    }
    
    const next =()=> {
      const condition = selectedIndex < images.length;
      const nextIndex = condition? selectedIndex +1 : 0;
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }
    
    // const selectedNewImage = (index, images, next=true) => {
    //   setLoaded(false)
    //   setTimeout(()=> {
        
    //   }, 2000)
      
    // }



  return (
    <div>
      <CarouselImg 
       src= {require(`../Images/${selectedImage}`).default}
       alt='cafe' className={loaded ? "loaded": ""}  onLoad={()=> setLoaded(true)}
       />
       <CarouselButtonContainer>
        <CarouselButton onClick={previous}>{"<"}</CarouselButton>
        <CarouselButton onClick={next}>{">"}</CarouselButton>
      </CarouselButtonContainer>
    </div>
  )
}

