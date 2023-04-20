import Card from "../src/component/cards/Cards";
import "bootstrap";
import Check from "./component/checkbox/Check"



function App() {
  return <div className="container">
    <p className="title1">Our Pricing</p>
    <Check/>
    <div className="container-cards">
      <Card
        title="Basic"
        price=" 19.99"
        storage="500 GB Storage"
        allowed=" 2 Users Allowed"
        send="Send up to 3 GB"
      />
      <Card
        title="Professionl"
        price="24.99"
        storage="1 TB Storage"
        allowed=" 5 Users Allowed"
        send="Send up to 10 GB"
      />
      <Card
        title="Master"
        price=" 39.99"
        storage="2 TB Storage"
        allowed=" 10 Users Allowed"
        send="Send up to 20 GB"
      />
    </div>
  </div>;
}

export default App;
