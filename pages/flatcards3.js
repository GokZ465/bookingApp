import React from "react";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useRouter } from "next/router";
import { TbClockCancel } from "react-icons/tb";

export default function FlatCards3({ ...props }) {
  const router = useRouter();

  return (
    <div className="col-1-of-2">
      <div
        className="feature-box"
        onClick={() =>
          router.push(
            {
              pathname: "/confirm",
            },
            "/confirm"
          )
        }
      >
        <i className={`fontawesome-outline fa-solid fa-car`} />

        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.title}
        </h3>
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
          {props.details}
        </p>
        <p
          style={{ textAlign: "left" }}
          className="feature-box__text cab-box__text"
        >
          <BsFillFuelPumpDieselFill
            className={`props.icon`}
            style={{ marginRight: "0.6rem" }}
          />{" "}
          {props.details3}
        </p>
        <p
          style={{ textAlign: "left" }}
          className="feature-box__text cab-box__text"
        >
          <TbClockCancel
            className={`props.icon`}
            style={{ marginRight: "0.6rem" }}
          />{" "}
          {props.details2}
        </p>
      </div>
    </div>
  );
}
