import Card from "./component/Cards"

function App() {
  return <div className="container">
    <p className="title1">Our Pricing</p>
    <div className="container-cards">
      <Card
        title="basic"
        price=" 19.99"
        storage="500 GB Storage"
        allowed=" 2 Users Allowed"
        send="Send up to 3 GB"
      />
      <Card
        title="basic"
        price="$ 19.99"
        storage="500 GB Storage"
        allowed=" 2 Users Allowed"
        send="Send up to 3 GB"
      />
      <Card
        title="basic"
        price="$ 19.99"
        storage="500 GB Storage"
        allowed=" 2 Users Allowed"
        send="Send up to 3 GB"
      />
    </div>
  </div>;
}

export default App;
