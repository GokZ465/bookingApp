import React from "react";
import FlatCards2 from "./flatcards2";
import FlatCards from "./_flatcards";

export default function Features2({ ...props }) {
  return (
    <section className="section-features">
      <h3>{props.title}</h3>
      <h4 className="trainh4">{props.desc}</h4>{" "}
      <pre>
        7:00 AM,Sat {props.checkFrom} Central Railway Station 7 hrs 40 mins View
        route 10:40 AM,{props.checkTo} Railway Station
      </pre>
      <div className="rower">
        <FlatCards2
          icon="feature-box__icon "
          title="SL "
          details="AVAILABLE-16 &nbsp; &nbsp; ₹725&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  Free Cancellation "
        />
        <FlatCards2
          icon="feature-box__icon "
          title="3 AC Tactical"
          details="AVAILABLE-43 &nbsp; &nbsp;
         ₹1890&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
         Free Cancellation"
        />
      </div>
    </section>
  );
}
