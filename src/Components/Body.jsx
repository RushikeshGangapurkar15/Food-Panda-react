import ResCard from "./ResCard";
import resList from "../common/mockdata";
import { HERO_IMG } from "../common/const";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, listOfRes) {
  return listOfRes.filter((res) => res.data.name.includes(searchText));
}

const Body = () => {
  // State variable
  // const [listOfAllRes, setListOfAllRes] = useState([]);
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [serachClick, setSearchClick] = useState("");

  useEffect(() => {
    getRes();
  }, []);

  async function getRes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  }

  // Conditional rendering

  //Normal jS variable
  // let listOfRes = [];
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="hero">
        <h1 className="hero-text">
          <b>
            Order <span> Food Online </span> in your city !!
          </b>
        </h1>
        <img src={HERO_IMG} alt="hero" className="hero-img" />
      </div>
      <div className="serach">
        <input
          type="text"
          className="serach-input"
          placeholder="search the restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            // Filter the data
            const data = filterData(searchText, listOfRes);
            setListOfRes(data);
            // setSearchClick("true");
            // listOfRes = resList;
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // let newResList = resList.filter((res) => res.data.avgRating > 4);
            setListOfRes(resList.filter((res) => res.data.avgRating > 4));
          }}
        >
          Top Rated{" "}
        </button>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[3]} /> */}
        {listOfRes.map((restaurant) => (
          <ResCard keys={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
