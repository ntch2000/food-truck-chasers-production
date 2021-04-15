import React from "react";
import Card from "../../components/Card/Card";
import Gyro from "../../assets/images/Gyros.png";
import Frank from "../../assets/images/Frank.png";
import Green from "../../assets/images/Green.png";
import Saucy from "../../assets/images/Saucy.png";
import Thyme from "../../assets/images/Thyme.png";

const Operator = () => {
  return (
    <>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card
              image={Gyro}
              foodTruckName="A Gyro's Hero"
              location="Atlanta"
              specials="Free hummas with purchas of large gyro"
              category="Gyros"
            />
            <Card
              image={Frank}
              foodTruckName="Lets Be Frank"
              location="Atlanta"
              specials="Just good hot dogs"
              category="Hot Dogs & Sausages"
            />
            <Card
              image={Green}
              foodTruckName="Green Delivery"
              location="Atlanta"
              specials="Cheakpea salad made fresh daily"
              category="Vegan Grill"
            />
            <Card
              image={Saucy}
              foodTruckName="Saucy Sails Provisions"
              location="Atlanta"
              specials="Free small queso with purchase of 4 tacos"
              category="Tacos"
            />
            <Card
              image={Thyme}
              foodTruckName="The Thyme Truck"
              location="Atlanta"
              specials="New Carrot Dogs 2 for $4"
              category="Vegan Grill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Operator;
