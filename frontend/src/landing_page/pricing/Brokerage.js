import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a style={{ textDecoration: "none" }} href="/">
            {" "}
            <h3 className="fs-5 ">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMs auto-squareoff: Additional charges of{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              50 + GST per order.
            </li>
            <li>digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              20 per contract note. Courier charges apply.{" "}
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI aacount (PIS), 0.5% or{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the aacount is in debit balance, any order placed will be
              charged{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              40 per executed order instead of{" "}
              <i
                style={{ fontSize: "0.8rem" }}
                class="fa-solid fa-indian-rupee-sign "
              ></i>
              20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a style={{ textDecoration: "none" }} href="/">
            {" "}
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
