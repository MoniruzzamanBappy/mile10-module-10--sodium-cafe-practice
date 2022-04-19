import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Searchbar.css";

const Searchbar = () => {
  const [foods, setFoods] = useState([])

  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setFoods(data))
  },[])
  return (
    <div>
      <div className="searchbar d-flex justify-content-center align-items-center">
        <InputGroup className=" mx-auto  w-25">
          <FormControl
            className="border-0"
            aria-label="Default "
            aria-describedby="inputGroup-sizing-default"
            placeholder="search your food"
          ></FormControl>
          <InputGroup.Text
            className="bg-danger search-btn px-4 border-0"
            id="inputGroup-sizing-default"
          >
            Search
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="d-flex justify-content-around food-type py-5">
          <Link to="/home/breakfast">Breakfast</Link>
          <Link to="/home/lunch">Lunch</Link>
          <Link to="/home/dinner">Dinner</Link>
      </div>
    <div className="card-deck mx-5">
        {
          foods.slice(0, 6).map(food=><Cart key={food.id} food={food}></Cart>)
        }
      </div>
    </div>
  );
};

export default Searchbar;
