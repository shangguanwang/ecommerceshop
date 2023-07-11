import React, { useState } from "react";

import "./Products.scss";

import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id); //convert the string to int
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        {/* Product Categories Starts here */}
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value="T-shirt"></input>
            <label htmlFor="1">T-shirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value="Shoes"></input>
            <label htmlFor="2">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value="Jackets"></input>
            <label htmlFor="3">Jackets</label>
          </div>
        </div>
        {/* Price Range Filter starts here */}
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            ></input>
            <span>{maxPrice}</span>
          </div>
        </div>
        {/* Radio Buttons starts here */}
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            ></input>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            ></input>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        ></img>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
