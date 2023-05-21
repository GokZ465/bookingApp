import React from "react";
import FlatCards2 from "./flatcards2";
import FlatCards3 from "./flatcards3";
import FlatCards from "./_flatcards";

export default function Features3({ ...props }) {
  return (
    <section className="section-features">
      {/* {props.title} */}
      <h3>{props.title}</h3>
      <h4 className="trainh4">{props.desc} </h4>
      <pre>{props.desc2}</pre>
      <div className="rower">
        <FlatCards3
          icon="feature-box__icon "
          title="
          Flexi Fare"
          details="Extra km fare: &nbsp; ₹18.0/km &nbsp;
          "
          details3="Fuel Type:&nbsp;

          Diesel&nbsp;"
          detailsRight="₹4,189"
          details2="Flexible cancellation policy"
        />
        <FlatCards3
          icon="feature-box__icon "
          title="Value + Fare"
          details="Extra km fare: &nbsp; ₹15.0/km &nbsp;
          "
          details3="Fuel Type:&nbsp;

          Diesel&nbsp;"
          detailsRight="₹4,636"
          details2="Cancellation Free within 30 mins"
        />
      </div>
    </section>
  );
}
