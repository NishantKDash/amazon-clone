import React from "react";
import "./home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id="1"
            title="IQOO Z6 Pro (Legion Sky, 6GB RAM, 128GB Storage) | Snapgradon 778G | 66W FlashCharge"
            image="https://m.media-amazon.com/images/I/615YGGce1-L._SL1200_.jpg"
            price={15000}
            rating={3}
          />
          <Product
            id="2"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={99.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Mi Notebook Ultra 3K Resolution Display Intel Core i5-11300H 11th Gen "
            image="https://m.media-amazon.com/images/I/81RHHnGydgL._SL1500_.jpg"
            price={45000}
            rating={4}
          />
          <Product
            id="4"
            title="Steelseries Arctis 1 Wired Over Ear Headphones with Mic (Black)"
            image="https://m.media-amazon.com/images/I/41JEZ2rg66L._SL1050_.jpg"
            price={12999}
            rating={4}
          />
          <Product
            id="5"
            title="XBox One Series S - Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever made "
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg"
            price={35000}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
            image="https://m.media-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg"
            price={49999}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
