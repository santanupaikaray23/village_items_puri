import React from 'react';
import './Placementoffered.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Placementoffered =(props)=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const listPlacementoffered = ({Placementoffereddata})=>{
        if(Placementoffereddata){
            return Placementoffereddata.map((item)=>{
                return(
                   <div className='check'>  
                    
                    <Carousel showDots={true} responsive={responsive}>
  <div className='card'>
  <img src={item.image1} alt=""/>
   <p>{item.name1}</p>
  <h1>Placed in {item.company1}</h1>
  <p>Opinion : {item.opinion1}</p>
  
  </div>
  <div className='card'>
  <img src={item.image2} alt=""/>
  <p>{item.name2}</p>
  <h1>Placed in {item.company2}</h1>
  <p>Opinion : {item.opinion2}</p>

  </div>
  <div className='card'>
  <img src={item.image3} alt=""/>
  <p>{item.name3}</p>
  <h1>Placed in {item.company3}</h1>
  <p>Opimion: {item.opinion3}</p>

  </div>
  <div className='card'>
  <img src={item.image4} alt=""/>
  <p>{item.name4}</p>
  <h1>Placed in {item.company4}</h1>
  <p>Opimion: {item.opinion4}</p>

  </div>
  <div> </div>
</Carousel>

                </div>  
                
                 
                    
                    
                )
            })
        }
    }
    return(
     
        <div className='placementofferedContainer'>
            <p className='placementofferedHeading'>
                Placement offered By Us
            </p>
            
            <br/>
            {listPlacementoffered(props)}
        </div>
    
    )
}
export default Placementoffered;