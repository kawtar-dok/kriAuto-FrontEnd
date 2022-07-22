import React from "react";
import CardCar from "components/Cards/CardCar.js";
import CardCheckoutCar from "components/Cards/CardCheckoutCar";

function payClient() {
  let startDate = "";
  let endDate = "";
  let statTitleModel = "";
  let statMarque = "";
  let statPrice = "";
  let statAgenceName = "";
  let statArrow = "";
  let statPercentColor = "";
  let statDescripiron = "";
  let statSeats = "";
  let statAuto = "";
  let statPetrol = "";
  let statIconColor = "";
  let statImageName = "";
  let statIconName = "";

  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    startDate = urlParams.get("startDate");
    endDate = urlParams.get("endDate");
    statTitleModel = urlParams.get("model");
    statMarque = urlParams.get("marque");
    statPrice = urlParams.get("price");
    statAgenceName = urlParams.get("agence");
    statArrow = urlParams.get("arrow");
    statPercentColor = urlParams.get("percentColor");
    statDescripiron = urlParams.get("description");
    statSeats = urlParams.get("seats");
    statAuto = urlParams.get("auto");
    statPetrol = urlParams.get("petrol");
    statIconColor = urlParams.get("iconColor");
    statImageName = urlParams.get("imageName");
    statIconName = urlParams.get("iconName");
    console.log (startDate);
  }
  const Item = (props) => (
    <div className="item-container">
      <CardCheckoutCar
        statMarque={statMarque}
        statTitleModel={statTitleModel}
        statArrow={statArrow}
        statPrice={statPrice}
        statPercentColor={statPercentColor}
        statDescripiron={statDescripiron}
        statImageName={statImageName}
        statAgenceName={statAgenceName}
        statSeats={statSeats}
        statAuto={statAuto}
        statPetrol={statPetrol}
        statIconColor={statIconColor}
        statIconName={statIconName}
      />
    </div>
  );

  const Checkout = (props) => (
    <div className="checkout w-full">
      <div className="checkout-container">
        <h3 className="heading-3">Credit card checkout</h3>
        <Input label="Cardholder's Name" type="text" name="name" />
        <Input
          label="Card Number"
          type="number"
          name="card_number"
          imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
        />
        <div className="row">
          <div className="col">
            <Input label="Expiration Date" type="month" name="exp_date" />
          </div>
          <div className="col">
            <Input label="CVV" type="number" name="cvv" />
          </div>
        </div>
        <Button text="Place order" />
      </div>
    </div>
  );

  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc} />
      </div>
    </div>
  );

  const Button = (props) => (
    <button
      className="checkout-btn"
      type="button"
      onClick={() => {
        alert("Order placed successfully");
        if (typeof window !== "undefined") {
          window.location.href = "/landing";
        }
      }}
    >
      {props.text}
    </button>
  );
  return (
    <div className="app-container rounded-xl">
      <div className="flex">
        <div className="col">
          <Item
            name="Instax Mini 90 Neo Classic"
            price="$144.99"
            img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg"
          />
        </div>
        <div className="col no-gutters">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default payClient;
