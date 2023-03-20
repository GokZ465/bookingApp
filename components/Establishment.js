import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import GoldBtnLink from "./GoldButtons";
import PlaneBtnLink, { PlaneBtn } from "./PlaneButtons";
import Stars from "./Stars";

import AppContext from "../firebase/AppContext";
import FormChange from "./FormChange";
export default function Establishment({
  establishment,
  hotelClick,
  airplaneClick,
}) {
  const router = useRouter();

  const context = useContext(AppContext);
  console.log(airplaneClick, hotelClick);
  const FormChange = () => {
    context.showForm(!context.form);
  };
  return (
    <div className="establishment">
      <figure className="col-1">
        <img
          src={establishment.imgURL}
          alt={`photo of ${establishment.name.replaceAll("-", " ")}`}
        />
      </figure>
      <div className="col-2">
        {/* <span className="id">{establishment.id}</span> */}
        <div className="location">
          <span className="line" />
          <span className="txt">{establishment.location}</span>
        </div>
        <h4 className="establishment-name">
          {establishment.name.replaceAll("-", " ")}
        </h4>
        <Stars rating={establishment.stars} />
        <div className="establishment-description">
          {establishment.descriptionShort}
        </div>

        {airplaneClick === "true" ? (
          <a onClick={() => FormChange()}>
            <PlaneBtnLink
              className="planeBtn"

              // onClick={() => {
              //   router.push(
              //     {
              //       pathname: "/establishment/[id]",
              //       query: {
              //         child: child,
              //         adult: adult,
              //         room: room,
              //         dates: dates,
              //       },
              //     },
              //     "/establishment/[id]"
              //   );
              // }}
            >
              BOOK
            </PlaneBtnLink>
          </a>
        ) : (
          <GoldBtnLink
            href="/establishment/[id]"
            // onClick={() => {
            //   router.push(
            //     {
            //       pathname: "/establishment/[id]",
            //       query: {
            //         child: child,
            //         adult: adult,
            //         room: room,
            //         dates: dates,
            //       },
            //     },
            //     "/establishment/[id]"
            //   );
            // }}
            as={`/establishment/${establishment.id}`}
          >
            BOOK
          </GoldBtnLink>
        )}
        {/* {form && (
          <div className="modalBody">
            <div className="modal">
              <div className="modalForm">
                <form>
                  <label
                    className="modalLabel"
                    htmlFor="name"
                    required="required"
                  >
                    Full Name
                  </label>
                  <input className="modalInput" id="name" type="text" />
                  <label
                    className="modalLabel"
                    htmlFor="email"
                    required="required"
                  >
                    Email Address
                  </label>
                  <input className="modalInput" id="email" type="email" />
                  <label className="modalLabel" htmlFor="pass">
                    Phone Number
                  </label>
                  <input
                    className="modalInput"
                    id="pass"
                    type="number"
                    required="required"
                  />
                  <button className="ModalButton" type="button">
                    Book Now
                  </button>
                </form>
              </div>
              <div className="invite">
                <h3 className="modalh3">
                  <br />
                  <br />
                  <br /> Still unsure about this trip? Lock this price!
                </h3>
                <div className="nope">No thanks, I dont like saving money</div>
                <div
                  onClick={() => formChange()}
                  className="modalClose"
                  title="close"
                ></div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
