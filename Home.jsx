import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousal1 from './carousal1.jpg';
import carousal2 from './carousal2.jpg';
import carousal3 from './carousal3.jpg';
import carousal4 from './carousal4.jpg';
import carousal5 from './carousal5.jpg';


function Home(){
  return (
    <Carousel className="container fluid">
    <Carousel.Item interval={1000}>
       <img src={carousal1} class="h-200px" alt='carousal1.jpg' />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img src={carousal2} class="d-block w-100" alt='carousal2.jpg' />
    </Carousel.Item>
    <Carousel.Item interval={800}>
    <img src={carousal3} class="d-block w-100" alt='carousal3.jpg'  />
    </Carousel.Item>
  <Carousel.Item interval={500}>
  <img src={carousal4} class="d-block w-100" alt='carousal4.jpg' />
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <img src={carousal5} class="d-block w-100" alt='carousal5.jpg'  />
  </Carousel.Item>
</Carousel>

   
  );
}

export default Home;







/*import React from "react"

function  (){
    return(
        <div className="container-fluid">
            <h1>Independence Day Celebration</h1>
            <p>The Independence Day of India, which is celebrated religiously throughout the Country on the 15th of August every year, holds tremendous ground in the list of national days, since it reminds every Indian about the dawn of a new beginning, the beginning of an era of deliverance from the clutches of British colonialism of more than 200 years. It was on 15th August 1947 that India was declared independent from British colonialism, and the reins of control were handed over to the leaders of the Country. India's gaining of independence was a tryst with destiny, as the struggle for freedom was a long and tiresome one, 
                witnessing the sacrifices of many freedom fighters, who laid down their lives on the line.</p>
        </div>)
}

export default History;*/














/*import React from "react"

function  Home(){
    return(
        <div className="container-fluid">
            <h1>Independence Day Celebration</h1>
            <p>The Independence Day of India, which is celebrated religiously throughout the Country on the 15th of August every year, holds tremendous ground in the list of national days, since it reminds every Indian about the dawn of a new beginning, the beginning of an era of deliverance from the clutches of British colonialism of more than 200 years. It was on 15th August 1947 that India was declared independent from British colonialism, and the reins of control were handed over to the leaders of the Country. India's gaining of independence was a tryst with destiny, as the struggle for freedom was a long and tiresome one, 
                witnessing the sacrifices of many freedom fighters, who laid down their lives on the line.</p>
        </div>)
}

export default Home;*/