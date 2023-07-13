import React, { useState } from "react";

import "./Product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const data = [
  "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={data[0]} alt="" onClick={(e) => setSelectedImg(0)}></img>
          <img src={data[1]} alt="" onClick={(e) => setSelectedImg(1)}></img>
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt=""></img>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p className="desc">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        {/* Quantity Button */}
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prevValue) => (prevValue === 1 ? 1 : prevValue - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prevValue) => prevValue + 1)}>
            +
          </button>
        </div>
        <buton className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </buton>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        {/* Remaining Info Text */}
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
