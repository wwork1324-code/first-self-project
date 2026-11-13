import React from "react";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
const products = [
{ pName: "Face Wash", desc: "Cleans skin gently.", Price: 850 },
    { pName: "Moisturizer", desc: "Keeps skin hydrated.", Price: 1200 },
    { pName: "Face Mask", desc: "Refreshes your skincare routine.", Price: 950 },
    { pName: "Face Scrub", desc: "Helps remove dead skin cells.", Price: 750 },
    { pName: "Sunscreen", desc: "Helps protect skin from UV rays.", Price: 1500 },
    { pName: "Lip Balm", desc: "Keeps lips moisturized.", Price: 400 },
    { pName: "Body Lotion", desc: "Moisturizes the skin.", Price: 1100 },
    { pName: "Hand Cream", desc: "Keeps hands soft.", Price: 650 },
    { pName: "Shampoo", desc: "Cleans hair and scalp.", Price: 900 },
    { pName: "Conditioner", desc: "Makes hair manageable.", Price: 950 },
    { pName: "Hair Serum", desc: "Helps smooth hair.", Price: 1300 },
    { pName: "Night Cream", desc: "Moisturizes skin at night.", Price: 1400 },
    { pName: "Day Cream", desc: "Provides daily moisture.", Price: 1250 },
    { pName: "Toner", desc: "Refreshes your skincare routine.", Price: 800 },
    { pName: "Micellar Water", desc: "Helps remove makeup.", Price: 1000 },
    { pName: "Body Scrub", desc: "Exfoliates the skin.", Price: 1050 },
    { pName: "Eye Cream", desc: "Moisturizes the skin around eyes.", Price: 1350 },
    { pName: "Aloe Vera Gel", desc: "A refreshing skincare gel.", Price: 550 },
    { pName: "Cleansing Milk", desc: "Gently cleanses the skin.", Price: 900 },
    { pName: "Body Wash", desc: "Cleanses and refreshes the body.", Price: 850 },
    { pName: "Cuticle Oil", desc: "Moisturizes nail cuticles.", Price: 500 },
    { pName: "Skincare Kit", desc: "A set of skincare essentials.", Price: 2800 },
  ];


  return (
    <div className="d-flex justify-content-evenly flex-wrap">

      {products.map((item, index) => (
          <Card
            key={index}
            pName={item.pName}
            desc={item.desc}
            Price={item.Price}
          />
        ))}

    </div>
  );
}

export default App;