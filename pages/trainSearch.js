import React, { useEffect } from "react";
import Features from "./_features";
import { useRouter, withRouter } from "next/router";
import Features2 from "./_features2";
import Features3 from "./features3";

export default function TrainSearch() {
  const { isReady } = useRouter();
  const router = useRouter();

  const {
    query: { checkFrom, checkTo, trainClick, cabClick },
  } = router;

  return (
    <div className="searchResultPage">
      <h3
        className="establishment-name"
        style={{ textAlign: "center", marginBottom: "2.5rem" }}
      >
        Search Results for {checkFrom && checkFrom.toLowerCase()}
      </h3>
      {trainClick === "true" ? (
        <>
          <Features
            title={`${checkFrom} - Jn. Irctc Terminal ${
              checkFrom ? checkFrom.toLowerCase() : `mumbai`
            } Rajdhani Express`}
            desc={"#12310 | Departs on : S M T W T F S "}
            checkTo={checkTo}
            checkFrom={checkFrom}
          />
          <Features2
            title={`${checkFrom} -Coromandel Express ${
              checkFrom ? checkFrom.toLowerCase() : `mumbai`
            } Terminal `}
            desc={"111 | Departs on : S M T F S "}
            checkTo={checkTo}
            checkFrom={checkFrom}
          />

          <Features
            title={`${checkFrom} -Ltt Exp ${
              checkFrom ? checkFrom.toLowerCase() : `mumbai`
            } Terminal `}
            desc={"1432 | Departs on : S M T  "}
            checkTo={checkTo}
            checkFrom={checkFrom}
          />
        </>
      ) : (
        <>
          <Features3
            title={"Indica, Swift or similar"}
            desc={"₹ 34,636 Onwards"}
            desc2={"Hatchback AC 4 Seats"}
            checkTo={checkTo}
            checkFrom={checkFrom}
          />
          <Features3
            title={"Xylo, Ertiga or similar"}
            desc={"₹ 40,189 Onwards"}
            desc2={"SUV AC 5 Seats"}
            checkTo={checkTo}
            checkFrom={checkFrom}
          />
        </>
      )}
    </div>
  );
}
