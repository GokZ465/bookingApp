import React, { useContext, useEffect } from "react";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useRouter } from "next/router";
import { TbClockCancel } from "react-icons/tb";
import FormChange from "../components/FormChange";
import AppContext from "../firebase/AppContext";
export default function FlatCards4({ ...props }) {
  const context = useContext(AppContext);

  const FormChange = () => {
    context.showForm(!context.form);
  };

  useEffect(() => {
    context.showForm(false);
  }, []);
  return (
    <div className="col-1-of-2">
      <div className="feature-box" onClick={FormChange}>
        <img src={props.img} style={{ height: "7rem" }}></img>

        <h3 className="heading-tertiary u-margin-bottom-small">Non-Stop</h3>
        <p
          style={{ textAlign: "right" }}
          className="feature-box__text cab-box__text"
        >
          {props.detailsRight}
        </p>

        <p
          style={{ textAlign: "left" }}
          className="feature-box__text cab-box__text"
        >
          <FiMapPin
            className={`props.icon`}
            style={{ marginRight: "0.6rem" }}
          />{" "}
          {props.date}
        </p>
        <p
          style={{ textAlign: "left" }}
          className="feature-box__text cab-box__text"
        >
          <i className={`fontawesome-outline fa-solid fa-plane`} />{" "}
          {props.details3}
        </p>
        <p
          style={{ textAlign: "left" }}
          className="feature-box__text cab-box__text"
        >
          <il
            className={`fontawesome-outline fa-solid fa-indian-rupee`}
            style={{ marginRight: "0.6rem" }}
          />{" "}
          {props.details2}
        </p>
      </div>
    </div>
  );
}
