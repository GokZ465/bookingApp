import React, { useEffect, useRef, useState } from "react";
import Establishment from "../components/Establishment";
import { useRouter, withRouter } from "next/router";

const Searchresult = () => {
  const { isReady } = useRouter();
  const router = useRouter();
  const {
    query: { data, airplaneClick, hotelClick },
  } = router;
  let data2;
  // let data = useRef("");
  useEffect(() => {
    if (router.isReady) {
      //  data = router.query;
      // console.log(JSON.parse(data));
    }
  }, [isReady]);
  return (
    <div className="searchResultPage">
      <div className="establishments-wrapper">
        {/* {(JSON.parse(data))} */}
        {/* {console.log(
          "hotelClick" + hotelClick,
          "airplabneClick" + airplaneClick
        )} */}
        {isReady &&
          JSON.parse(data).map((p, i) => (
            <Establishment
              key={i}
              establishment={p}
              airplaneClick={airplaneClick}
              hotelClick={hotelClick}
            />
          ))}
      </div>
    </div>
  );
};
//export default Searchresult;
module.exports = withRouter(Searchresult);
