import React, { useEffect, useRef, useState } from "react";
import Establishment from "../components/Establishment";
import { useRouter, withRouter } from "next/router";

const Searchresult = () => {
  const { isReady } = useRouter();
  const router = useRouter();
  const {
    query: { data },
  } = router;
  let data2;
  // let data = useRef("");
  useEffect(() => {
    if (router.isReady) {
      // console.log(JSON.parse(query));
      //  data = router.query;
      // console.log(JSON.parse(data));
    }
  }, [isReady]);
  return (
    <div className="searchResultPage">
      <div className="establishments-wrapper">
        {/* {(JSON.parse(data))} */}
        {/* {console.log(JSON.parse(data))} */}
        {isReady &&
          JSON.parse(data).map((p, i) => (
            <Establishment key={i} establishment={p} />
          ))}
      </div>
    </div>
  );
};
//export default Searchresult;
module.exports = withRouter(Searchresult);
