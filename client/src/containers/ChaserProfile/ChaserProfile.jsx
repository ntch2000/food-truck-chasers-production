// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./style.css";

const ChaserProfile = () => {
  return (
    <div>
      <div>
        <main className="container cont">
          <div className="row">
            <div className="col">
              <img
                className="img"
                src="https://www.rollingstone.com/wp-content/uploads/2018/06/the-rock-21-things-ecac6818-b25d-48d5-b9c8-baafa6e305d1.jpg?w=1024"
                alt="the rock"
              />
                     <h3 className="musicianName">The Rock</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                ipsum amet laborum earum rem quas a facilis reiciendis sapiente
                sit quia neque aliquid autem molestias cupiditate sequi ut vero
                animi.
              </p>
            </div>
            <div className="float">
       
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <h4>
                {musician.contact}
                <span>
                  {/* <Link to={`/contact/${musician._id}`}> */}
                    {/* <button
                      className="btn waves-effect waves-light"
                      style={{ backgroundColor: "#004AAD", color: "ffff" }}
                    >
                      contact me
                    </button> */}
                  {/* </Link> */}
                {/* </span>
              </h4> */}
              <h4>555-867-5309</h4>
              <h4>therock@gmail.com</h4>
              <h4>Atlanta</h4>
              {/* <Link to={`/update/${musician._id}`}> */}
                <button
                  className="btn waves-effect waves-light"
                  style={{ backgroundColor: "#ff914d", color: "white" }}
                >
                  update profile
                </button>
              {/* </Link> */}
              {/* <Link to={"/home"}> */}
                <button
                  className="btn waves-effect waves-light"
                  style={{ backgroundColor: "#ff914d", color: "white" }}
                  // onClick={() => {
                  //   deleteProfile(musician._id);
                  // }}
                  // eslint-disable-next-line
                >
                  delete profile
                </button>
              {/* </Link> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChaserProfile;
