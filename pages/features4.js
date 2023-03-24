import React from "react";
import FlatCards2 from "./flatcards2";
import FlatCards3 from "./flatcards3";
import FlatCards4 from "./flatcards4";
import FlatCards from "./_flatcards";

export default function Features4({ ...props }) {
  return (
    <section className="section-features">
      <h3>{`Flights from ${props.checkFrom} to ${props.checkTo} and back`}</h3>
      {/* <h4 className="trainh4">{props.startDate} </h4> */}
      {/* <pre>{props.startDate}</pre> */}
      <div className="rower">
        <FlatCards4
          icon="feature-box__icon "
          title={props.title}
          detailsRight="01 h 30 m"
          details3={props.desc}
          img={props.img}
          details2={Math.floor(Math.random() * 10000)}
          date={props.startDate}
        />
        <FlatCards4
          icon="feature-box__icon "
          title={props.title}
          detailsRight="01 h 50 m"
          details3={props.desc}
          img={props.img}
          details2={Math.floor(Math.random() * 5000)}
          date={props.startDate}
        />
        <FlatCards4
          icon="feature-box__icon "
          title={props.title}
          detailsRight="02 h 10 m"
          details3={props.desc}
          img={props.img}
          details2={Math.floor(Math.random() * 5000)}
          date={props.endDate}
        />
      </div>
    </section>
  );
}
