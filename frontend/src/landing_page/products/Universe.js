import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experiance even furthur with our
          parter platforms
        </p>

        <div style={{ textAlign: "center" }} className="col-4 p-4 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="samllcaseLogo" />
          <p className="text-muted text-small p-3">
            {" "}
            Thematic investment platform
          </p>
        </div>

        <div style={{ textAlign: "center" }} className="col-4 p-4 mt-5 ">
          <img
            style={{ height: "52px", width: "199px" }}
            src="media/images/streakLogo.png" alt="streakLogo"
          />
          <p className="text-muted text-small  p-3">Algo & strategy platform</p>
        </div>

        <div style={{ textAlign: "center" }} className="col-4 p-4 mt-5">
          <img
            style={{ height: "52px", width: "199px" }}
            src="media/images/sensibullLogo.svg" alt="sensibullLogo"
          />
          <p className="text-muted text-small p-3"> Options trading platfrom</p>
        </div>

        <div style={{ textAlign: "center" }} className="col-4 p-4 mt-2">
          <img
            style={{ height: "52px", width: "199px" }}
            src="media/images/zerodhaFundhouse.png" alt="zerodhafundHouse"
          />
          <p className="text-muted text-small p-3"> Assest management</p>
        </div>

        <div style={{ textAlign: "center" }} className="col-4 p-4 mt-2">
          <img
            style={{ height: "52px", width: "199px" }}
            src="media/images/goldenpiLogo.png" alt="goldenpiLogo"
          />
          <p className="text-muted text-small p-3">Bonds trading platfrom</p>
        </div>

        <div style={{ textAlign: "center" }} className="col-4 p-4   mt-2 ">
          <img
            style={{ height: "52px", width: "199px" }}
            src="media\images\dittoLogo.png" alt="dittoLogo"
          />
          <p className="text-muted text-small p-4">Insurence</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
