import React, { useEffect } from "react";
import Features from "./_features";
import { useRouter, withRouter } from "next/router";
import Features2 from "./_features2";

export default function TrainSearch() {
  const { isReady } = useRouter();
  const router = useRouter();
  const {
    query: { checkFrom, checkTo },
  } = router;
  let data2;
  // let data = useRef("");
  useEffect(() => {
    if (router.isReady) {
    }
  }, [isReady]);
  return (
    <div className="searchResultPage">
      <h3
        className="establishment-name"
        style={{ textAlign: "center", marginBottom: "2.5rem" }}
      >
        {" "}
        Search Results for Chennai
      </h3>
      <Features
        title={`${checkFrom} - Jn. Irctc Terminal ${checkFrom.toLowerCase()} Rajdhani Express`}
        desc={"#12310 | Departs on : S M T W T F S "}
        checkTo={checkTo}
        checkFrom={checkFrom}
      />
      <Features2
        title={`${checkFrom} -Coromandel Express ${checkFrom.toLowerCase()} Terminal `}
        desc={"111 | Departs on : S M T F S "}
        checkTo={checkTo}
        checkFrom={checkFrom}
      />

      <Features
        title={`${checkFrom} -Ltt Exp ${checkFrom.toLowerCase()} Terminal `}
        desc={"1432 | Departs on : S M T  "}
        checkTo={checkTo}
        checkFrom={checkFrom}
      />
    </div>
  );
}
