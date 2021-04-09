import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
      
 <>
 <div class="col">
 <div className="card shadow-sm" id="card">
  <img src={props.image} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodTruckName}</h5>
    <ul>
        <li>Location:{props.location}</li>
        <li>Today's Special!:{props.specials}</li>
        <li>Food Category:{props.category}</li>
      </ul>
  </div>
</div>
</div>
 </>
    
    );
};

export default Card;