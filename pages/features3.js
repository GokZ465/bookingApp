import React from "react";
import FlatCards2 from "./flatcards2";
import FlatCards from "./_flatcards";

export default function Features3({ ...props }) {
  return (
    <section className="section-features">
      <h3>{props.title}</h3>
      <h4 className="trainh4">Indica, Swift or similar</h4>
      <pre> Hatchback AC 4 Seats</pre>
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
