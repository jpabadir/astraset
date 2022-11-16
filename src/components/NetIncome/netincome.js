import React from "react";
import CIK from "./CIK.json";
import { useState } from "react";

function NetIncomeLoss() {
  const [ticker, setTicker] = useState("");
  const [cik, setCik] = useState("");

  function clickToGetTicker() {
    if (CIK[ticker]) {
      setCik(CIK[ticker]);
    } else {
      alert("Not valid");
    }
  }
  return (
    <div>
      <div>
        {/* {INPUT BOX} */}
        <input
          name="searchTicker"
          type="text"
          id="searchTicker"
          onChange={(value) => {
            setTicker(value.target.value);
          }}
        />
        <input type="button" value="Search" onClick={clickToGetTicker} />
        <p>{cik}</p>
      </div>
      <div>
        {/* {{CIK.fields[1]}} */}
        {/* {CIK.fields.map((list) => {
        })} */}
      </div>
    </div>
  );
}

export default NetIncomeLoss;

// Take ticker input from user then find the corresponding CIK number. (DONE)
// Fill the left of the CIK number with 0's until there are a total of 10 digits. (CIK numbers must be 10 digits including 0's)
// Plug the CIK number into https://data.sec.gov/api/xbrl/companyconcept/CIK##########/us-gaap/NetIncomeLoss.json.
// Send a GET request.
// Read JSON with JS and get the value of the "val" key using document.getElementById.
// Print the values.
