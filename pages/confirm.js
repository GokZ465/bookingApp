import React, { useContext } from "react";
import AppContext from "../firebase/AppContext";
import { format } from "date-fns";
export default function Confirm() {
  const context = useContext(AppContext);
  return (
    <>
      <div className="confirm-body">
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
                {context.roomContext !== "default" ? context.roomContext : "1"}
              </p>
            </div>
            <div className="label-cell label-cell-left Label-2">
              <label className="base-label">Adults</label>
            </div>
            <div className="label-cell Text-2">
              <p className="order-details">
                {context.adultContext !== "default" ? context.adultContext : 1}
              </p>
            </div>
            <div className="label-cell label-cell-left Label-3">
              <label className="base-label">Children</label>
            </div>
            <div className="label-cell Text-3">
              <p className="order-details">
                {context.childContext !== "default" ? context.childContext : 1}
              </p>
            </div>
            <div className="label-cell label-cell-left Label-4">
              <label className="base-label">Data From</label>
            </div>
            <div className="label-cell Text-4">
              <p className="order-details">
                {context.datesContext[0] !== "d"
                  ? context.datesContext[0]
                  : format(Date.now(), "dd / MM / yyyy")}
              </p>
            </div>
            <div className="label-cell label-cell-left Label-5 bottom-border">
              <label className="base-label">Date End</label>
            </div>
            <div className="label-cell Text-5 bottom-border">
              <p className="order-details">
                {context.datesContext[1] !== "e"
                  ? context.datesContext[1]
                  : format(Date.now(), "dd / MM / yyyy")}
              </p>
            </div>
          </div>

          <div className="heading">
            {/* <div className="inline">
              <label className="base-label">Name</label>
              <p className="order-details">Josie Wellington</p>
            </div>
            <div className="inline">
              <label className="base-label">Email Address</label>
              <p className="order-details">josie.wellington346@gmail.com</p>
            </div> */}
          </div>
          <div>
            <div className="inline">
              <label className="base-label notop">Program End</label>
              <p className="order-details">December 31, 2023</p>
            </div>

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
                    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </>{" "}
                    Cancellation till check in{" "}
                    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                    <>&nbsp;&nbsp; No meals included</>
                  </span>
                </li>
                <li className="margin-20">
                  <strong>
                    <span className="nobg">Total</span>
                    <span className="nobg">₹ 2000.00</span>
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
                    By checking this box, you agree that your debit/credit card
                    will be charged ₹ 2000.00.
                  </strong>
                  <br />
                  <br />
                  You also agree that, unless you are removed from the program
                  before the program end date, your subscription will
                  automatically renew and you authorize us to continue to charge
                  your debit/credit card ₹ 200.00 monthly (until removed from
                  the program). Once charged, all purchases, including renewals,
                  are non-refundable.
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="margin-40">
          <div className="card">
            <div className="three-column">
              <div>
                <label className="base-label">Card on File</label>
                XXXX-XXXX-XXXX-1234
              </div>
              <div>
                <label className="base-label">Expiration</label>
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
              value=""
            />
            <label className="base-label">Card Number</label>
            <input
              className="base-input input-cc-icon"
              id="_905815077"
              type="text"
              name="client_id"
              placeholder=""
              value=""
            />
            <label className="base-label">Expiration</label>
            <input
              className="base-input"
              id="_905815077"
              type="text"
              name="client_id"
              placeholder=""
              value=""
            />
            <label className="base-label">CVC</label>
            <input
              className="base-input"
              id="_905815077"
              type="text"
              name="client_id"
              placeholder=""
              value=""
            />
            <input type="button" value="Pay Now" className="button"></input>
          </div>
        </div>
      </div>
    </>
  );
}
