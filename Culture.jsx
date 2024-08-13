import React from "react";
import Card from 'react-bootstrap/Card';
import culture1 from './culture1.jpg';
import culture2 from './culture2.jpg';
import culture3 from './culture3.jpg';
import culture4 from './culture4.jpg';

function Culture() {
   return (
      <div className="culture">
         <h2 >Culture & Heritage</h2>
         <p>The pertinent identifying elements of India's nationalism, Culture & Heritage represent the heart and soul of the Country in its retrospective magnitude.
            The fragrance of India's inherent ethnic essence lingers to mesmerize the world at large.</p>

         <div className="row">
            <div className="col-6">
               <Card style={{ width: '30rem' }} >
                  <img src={culture1} alt="culture1.jpg" />
               </Card>
            </div>
            <div className="col-6">
               <Card style={{ width: '26rem' }} >
                  <img src={culture2} alt="culture2.jpg" />
               </Card>
            </div>
         </div>
         <div className="row">
            <div className="col-6">
               <Card style={{ width: '30rem' }} >
                  <img variant="top" src={culture3} alt="culture3.jpg" />
               </Card>
            </div>
            <div className="col-6">
               <Card style={{ width: '26rem' }} >
                  <img variant="top" src={culture4} alt="culture4.jpg" />
               </Card>
            </div>
         </div>
      </div>




   );
}

export default Culture;