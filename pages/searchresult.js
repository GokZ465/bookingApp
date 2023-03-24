import React, { useContext, useEffect, useRef, useState } from "react";
import Establishment from "../components/Establishment";
import Router, { useRouter, withRouter } from "next/router";
import AppContext from "../firebase/AppContext";

const Searchresult = () => {
  const context = useContext(AppContext);

  const { isReady } = useRouter();
  const router = useRouter();
  const {
    query: {
      data,
      airplaneClick,
      hotelClick,
      checkFrom,
      checkTo,
      startDate,
      endDate,
    },
  } = router;
  let data2 = "";
  if (data) {
    data2 = JSON.parse(data);
    console.log(data2.length);
  }
  // let data = useRef("");
  useEffect(() => {
    if (router.isReady) {
      //  data = router.query;
      // console.log(JSON.parse(data));
    }
  }, [isReady]);
  const FormChange = () => {
    context.showForm(!context.form);
  };
  return (
    <div className="searchResultPage">
      {data2 !== "" && (
        <div
          className={
            airplaneClick === "true"
              ? "airplane-wrapper"
              : "establishments-wrapper"
          }
          id={data2.length > 2 ? "airplane-wrapper-grid" : ""}
        >
          {hotelClick === "true" && (
            <h3
              className="notop establishment-name"
              style={{ textAlign: "center", marginBottom: "2.5rem" }}
            >
              {console.log()}
              Hotels in {data2[0].txtOne}
            </h3>
          )}
          {/* {(JSON.parse(data))} */}
          {/* {console.log(
          "hotelClick" + hotelClick,
          "airplabneClick" + airplaneClick
        )} */}
          {isReady &&
            data &&
            JSON.parse(data).map((p, i) => (
              <Establishment
                key={i}
                establishment={p}
                airplaneClick={airplaneClick}
                hotelClick={hotelClick}
                checkFrom={checkFrom}
                checkTo={checkTo}
                startDate={startDate}
                endDate={endDate}
              />
            ))}
        </div>
      )}
      {context.form && airplaneClick === "true" && (
        <div className="modalBody">
          <div className="modal">
            <div className="modalForm">
              <form action="/confirm">
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

                <button className="ModalButton" type="submit">
                  Book Now
                </button>

                {/* <button
                  className="ModalButton"
                  type="button"
                  onClick={router.push(
                    {
                      pathname: "/confirm",
                      query: {
                        isHotel: false,
                      },
                    },
                    "/confirm"
                  )}
                >
                  Book Now
                </button> */}
              </form>
            </div>
            <div className="invite">
              <h3 className="modalh3">
                <br />
                <br />
                <br /> Still unsure about this trip? Lock this price!
              </h3>

              <div
                onClick={() => FormChange()}
                className="modalClose"
                title="close"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//export default Searchresult;
module.exports = withRouter(Searchresult);
