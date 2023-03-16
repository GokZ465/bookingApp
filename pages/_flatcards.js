import React from "react";
//import { SlCheck } from "react-icons/sl";

const styles = {};
export default function FlatCards({ ...props }) {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        {/* <SlCheck className={`props.icon`} /> */}
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.title}
        </h3>
        <p className="feature-box__text">{props.details}</p>
      </div>
    </div>
  );
}
