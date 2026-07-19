import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center ">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-4">
          free equity investments and flat{" "}
          <i
            style={{ fontSize: "0.8rem" }}
            class="fa-solid fa-indian-rupee-sign "
          ></i>
          20 traday and F&Q trades.
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media\images\pricingEquity.svg" alt="pricing" />
          <h1 className="fs-3">Free quity delivery</h1>
          <p className="text-muted">
            All equity investments (NSE, BSE), are absolutely free-{" "}
            <i
              style={{ fontSize: "0.8rem" }}
              class="fa-solid fa-indian-rupee-sign "
            ></i>
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="pricing"/>
          <h1 className="fs-3">Intraday and F&Q trades</h1>
          <p className="text-muted">
            Flat{" "}
            <i
              style={{ fontSize: "0.8rem" }}
              class="fa-solid fa-indian-rupee-sign "
            ></i>
            20 or 0.03% (whichever is lower) per executed order on intraday
            traders across equity, currency, and commodity traders.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="pricing" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free-{" "}
            <i
              style={{ fontSize: "0.8rem" }}
              class="fa-solid fa-indian-rupee-sign "
            ></i>
            0 commisions & DP charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
