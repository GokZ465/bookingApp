import React, { useContext, useState } from "react";
import AppContext from "../firebase/AppContext";
import { format } from "date-fns";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FormChange } from "../components/FormChange";
export default function Confirm() {
  const context = useContext(AppContext);
  const router = useRouter();
  console.log("11111111");

  console.log("notHotel");
  console.log(context.notHotel);
  const [cvvNumber, setCvvNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const FormChange = () => {
    context.showForm(true);
  };
  const funcAlert = () => {
    // alert("your booking is done");
    toast("your booking is done", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    window.location.reload();
  };
  const handleNameChange = (event) => {
    const limit = 3;

    // 👇️ only take first N characters
    setCvvNumber(event.target.value.slice(0, limit));
  };
  const handleNumber = (event) => {
    const limit = 16;

    // 👇️ only take first N characters
    setCardNumber(event.target.value.slice(0, limit));
  };

  return (
    <>
      <div className="confirm-body">
        {context.roomContext !== "default" && (
          <div className="heading">
            <h3
              className="notop establishment-name"
              style={{ textAlign: "center", marginBottom: "2.5rem" }}
            >
              Order Review
            </h3>

            <div className="grid-container">
              <div className="label-cell label-cell-left Label-1">
                <label className="base-label">Rooms</label>
              </div>
              <div className="label-cell  Text-1">
                <p className="order-details">
                  {context.roomContext !== "default"
                    ? context.roomContext
                    : "1"}
                </p>
              </div>
              <div className="label-cell label-cell-left Label-2">
                <label className="base-label">Adults</label>
              </div>
              <div className="label-cell Text-2">
                <p className="order-details">
                  {context.adultContext !== "default"
                    ? context.adultContext
                    : 1}
                </p>
              </div>
              <div className="label-cell label-cell-left Label-3">
                <label className="base-label">Children</label>
              </div>
              <div className="label-cell Text-3">
                <p className="order-details">
                  {context.childContext !== "default"
                    ? context.childContext
                    : 1}
                </p>
              </div>
              <div className="label-cell label-cell-left Label-4">
                <label className="base-label">From Date </label>
              </div>
              <div className="label-cell Text-4">
                <p className="order-details">
                  {context.datesContext[0] !== "d"
                    ? context.datesContext[0]
                    : format(Date.now(), "dd / MM / yyyy")}
                </p>
              </div>
              <div className="label-cell label-cell-left Label-5 bottom-border">
                <label className="base-label">End Date</label>
              </div>
              <div className="label-cell Text-5 bottom-border">
                <p className="order-details">
                  {context.datesContext[1] !== "e"
                    ? context.datesContext[1]
                    : format(Date.now(), "dd / MM / yyyy")}
                </p>
              </div>
            </div>

            {/* <div className="inline">
              <label className="base-label">Name</label>
              <p className="order-details">Josie Wellington</p>
            </div>
            <div className="inline">
              <label className="base-label">Email Address</label>
              <p className="order-details">josie.wellington346@gmail.com</p>
            </div> */}

            <div>
              {/* <div className="inline">
              <label className="base-label notop">Program End</label>
              <p className="order-details">December 31, 2023</p>
            </div> */}
              {context.roomContext !== "default" && (
                <div className="coupon card margin-40">
                  <h2 className="base-label">Coupon Code</h2>
                  <input className="base-input" id="code"></input>

                  <input
                    type="button"
                    value="Apply Coupon"
                    className="button"
                  ></input>
                </div>
              )}
              <div className="inline">
                <label className="  base-label margin-40 notop">
                  Order Details
                </label>
                <ul className="leaders">
                  <li className="margin-20">
                    <span className="nobg">
                      {context.roomContext}
                      <>&nbsp;</> Room <>&nbsp;</> <>&nbsp;</>
                    </span>
                    <span className="nobg">₹ 1750.00</span>
                  </li>

                  <li className="margin-20">
                    <span className="nobg margin-20">
                      {" "}
                      Taxes and Service Fee<>&nbsp;</> <>&nbsp;</>
                    </span>
                    <span className="nobg">₹ 400.00</span>
                  </li>
                  <li className="margin-20">
                    <span className="nobg margin-20">
                      {" "}
                      Discount<>&nbsp;</> <>&nbsp;</>
                    </span>
                    <span className="nobg">-₹ 300.00</span>
                  </li>
                  <li className="margin-40">
                    <span className="nobg margin-20">
                      {" "}
                      <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                      <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                      <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </>{" "}
                      Cancellation till check in{" "}
                      <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                      <>&nbsp;&nbsp; No meals included</>
                    </span>
                  </li>
                  <li className="margin-20">
                    <strong>
                      <span className="nobg">Total</span>
                      <span className="nobg">₹ 1850.00</span>
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="inline">
                <h3 className="margin-40 inline">Payment</h3>
                <form action="/">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label htmlFor="vehicle1">
                    {" "}
                    <strong>
                      By checking this box, you agree that your debit/credit
                      card will be charged ₹ 2000.00.
                    </strong>
                    <br />
                    <br />
                    You also agree that, unless you are removed from the program
                    before the program end date, your subscription will
                    automatically renew and you authorize us to continue to
                    charge your debit/credit card ₹ 2000.00 monthly (until
                    removed from the program). Once charged, all purchases,
                    including renewals, are non-refundable.
                  </label>
                </form>
              </div>
            </div>
          </div>
        )}
        <div id="payment-methods">
          <div className="methods">
            <i className="fas fa-credit-card fa-3x"></i> <br></br>
            <br></br>
            <span style={{ color: "#fa19" }}>Credit / Debit</span>&nbsp;
            <span>Card</span>
          </div>
          <div className="methods">
            <i className="fab fa-paypal fa-3x"></i>
            <span>Pay</span>
            <span>Pal</span>
          </div>
          <div className="methods">
            <i className="fab fa-amazon-pay fa-3x"></i>
            <span style={{ color: "orange" }}>UPI </span>
            <span>Options</span>
          </div>
        </div>
        {context.roomContext === "default" && (
          <div className="coupon card margin-40">
            <h2 className="base-label">Promo Code</h2>
            <input className="base-input" id="code"></input>

            <input
              type="button"
              value="Apply Coupon"
              className="button"
            ></input>
          </div>
        )}
        <div className="margin-40">
          <div className="card">
            <div className="three-column">
              <div>
                <label className="base-label">Card on File</label>
                XXXX-XXXX-XXXX-1234
              </div>
              <div>
                <label className="base-label">Expiry</label>
                01/23
              </div>
              <div className="mc">
                <label className="base-label">Card Type</label>
                <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png" />
              </div>
            </div>
            <input
              type="button"
              value="Pay with this card"
              className="button"
            ></input>
          </div>

          <div className="card" style={{ marginTop: "40px" }}>
            <label className="base-label">Name</label>
            <input
              className="base-input"
              id="_905815077"
              type="text"
              name="client_id"
              placeholder=""
            />
            <label className="base-label">Card Number</label>
            <input
              className="base-input input-cc-icon"
              id="_905815077"
              type="number"
              name="client_id"
              placeholder=""
              value={cardNumber}
              onChange={handleNumber}
            />
            <label className="base-label">Expiry</label>
            <input
              className="base-input"
              id="_905815077"
              type="text"
              name="client_id"
              placeholder=""
            />
            <label className="base-label">CVV</label>
            <input
              className="base-input"
              id="_905815077"
              type="number"
              name="client_id"
              placeholder=""
              maxLength={3}
              value={cvvNumber}
              onChange={handleNameChange}
            />
            <input
              type="button"
              value="Book Now"
              className="button"
              onClick={FormChange}
            ></input>
          </div>
        </div>
      </div>
      <div className="modalBody">
        <div className="modal modalh3">
          <div className="modalForm newFormBody">
            <form action="/confirm">
              <label
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="modalLabel"
                htmlFor="name"
                required="required"
              >
                Your booking has been done successfully!
              </label>

              <label
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "60px",
                }}
                className="modalLabel"
                htmlFor="email"
                required="required"
              >
                Your Booking ID is: {Math.floor(Math.random() * 10044000)}
              </label>

              <label className="modalLabel" htmlFor="pass"></label>
              {/* <input
                className="modalInput"
                id="pass"
                type="number"
                value={cardNumber}
                onChange={handleNumber}
                onKeyDown={(e) =>
                  exceptThisSymbols.includes(e.key) && e.preventDefault()
                }
                required="required"
              /> */}

              {/* <button className="ModalButton" type="submit">
                Book Now
              </button> */}

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
          <div>
            {/* <h3 className="modalh3">
              <br />
              <br />
              <br />
            </h3> */}

            <div
              onClick={() => FormChange()}
              className="modalClose"
              title="close"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
