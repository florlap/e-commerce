

import React, {useState} from 'react'
import Styles from '../Styles/carousel.module.css'

export default function Carousel (props) {

    const images = ["cafe1.png", "cafe2.png","cafe3.png"] 
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImage, setSelectedImage]= useState(images[0])
    const [loaded, setLoaded] = useState(false)
    //const selectNewImage(index, images)

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

  return (
    <div>
      {/* <img className={Styles.carouselImg}  src= {require(`../Images/${selectedImage}`).default} alt='cafe' className={loaded ? "loaded": ""}  onLoad={()=> setLoaded(true)}/> */}
      <button onClick={previous}>{"<"}</button>
      <button onClick={previous}>{">"}</button>

    </div>
  )
}

