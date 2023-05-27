import React from "react";
import "../index.css";

function Front() {
  return (
    <>
      <div className=" front-container">
        <div className="text">
          <h1>
            I am <span className="special">Vishal Kumar</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, totam nisi veritatis earum aut sit voluptas quibusdam?
            Sunt inventore unde dolorum! Eaque vitae, ea, quibusdam doloremque
            facilis,{" "}
          </p>
          <button className="btn">Download CV</button>
        </div>
        <div className="pic">
          <img src="./me.jpg" alt="pic-developer" className="image" />
        </div>
      </div>
    </>
  );
}

export default Front;
