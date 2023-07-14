import React, { useState } from "react";

import "./Products.scss";

import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id); //convert the string to int
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  {
    /* Grab subcategories from Strapi as left side categories filter */
  }
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  {
    /* Handle checked filter */
  }
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const handleChange = (e) => {
    const changedId = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, changedId]
        : selectedSubCats.filter((id) => id !== changedId)
    );
  };

  return (
    <div className="products">
      <div className="left">
        {/* Product Categories Starts here */}
        <div className="filterItem">
          <h2>Product Categories</h2>
          {/* map Strapi data */}
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              ></input>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
