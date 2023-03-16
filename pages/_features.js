import React from "react";
import FlatCards2 from "./flatcards2";
import FlatCards from "./_flatcards";

export default function Features({ ...props }) {
  return (
    <section className="section-features">
      <h3>{props.title}</h3>
      <h4 className="trainh4">{props.desc}</h4>{" "}
      <pre>
        5:10 PM, Fri {props.checkFrom} Railway Station 4 hrs 42 mins View route
        9:52 PM, Fri {props.checkTo} Central Railway Station
      </pre>
      <div className="rower">
        <FlatCards
          icon="feature-box__icon "
          title="3A Tactical"
          details="AVAILABLE-10 &nbsp; &nbsp; ₹1725&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  Free Cancellation "
        />
        <FlatCards
          icon="feature-box__icon "
          title="2A Tactical"
          details="AVAILABLE-90 &nbsp; &nbsp;
         ₹2525&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
         Free Cancellation"
        />

        <FlatCards
          icon="1st Class"
          title="1st Class"
          details="AVAILABLE-90&nbsp; &nbsp;
          ₹3525&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          Free Cancellation"
        />
        <FlatCards
          icon="1st Class"
          title="1st Class"
          details="AVAILABLE-1 &nbsp; &nbsp;
          ₹2525&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          Free Cancellation"
        />
      </div>
    </section>
  );
}
