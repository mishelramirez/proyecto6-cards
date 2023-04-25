import Card from "../src/component/cards/Cards";
import "bootstrap";
import Check from "./component/checkbox/Check";
import { useState } from "react";

const cardsProperty = [
  {
    title: "Basic",
    price: " 19.99",
    price2: " 30.99",
    storage: "500 GB Storage",
    allowed: " 2 Users Allowed",
    send: "Send up to 3 GB",
  },
  {
    title: "Professionl",
    price: "24.99",
    price2: " 30.99",
    storage: "1 TB Storage",
    allowed: " 5 Users Allowed",
    send: "Send up to 10 GB",
  },
  {
    title: "Master",
    price: " 39.99",
    price2: " 30.99",
    storage: "2 TB Storage",
    allowed: " 10 Users Allowed",
    send: "Send up to 20 GB",
  }
]

function App() {

  const [checkbox, setCheckbox] = useState(true)

  return <div className="container">
    <p className="title1">Our Pricing</p>

    <Check handlChecked={setCheckbox} />

    <div className="container-cards">
      {cardsProperty.map((property) => {

        const { price, price2 } = property
        return (
          <Card title={property.title}
            price={checkbox ? price : price2}
            storage={property.storage}
            allowed={property.allowed}
            send={property.send} />
        )
      })}


    </div>

  </div>;
}

export default App;
