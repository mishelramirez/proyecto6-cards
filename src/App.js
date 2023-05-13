import Card from "../src/component/cards/Cards";
import "bootstrap";
import Check from "./component/checkbox/Check";
import {  useState } from "react";
import cardsProperty from "./cardProperty";

function App() {

  const [checkbox, setCheckbox] = useState(true)

  return <div className="container">
    <p className="title1">Our Pricing</p>

    <Check handlChecked={setCheckbox} />

    <div className="container-cards">

      {cardsProperty.map((property) => {

        const { price, price2 } = property

        return (
          <Card
            title={property.title}
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
