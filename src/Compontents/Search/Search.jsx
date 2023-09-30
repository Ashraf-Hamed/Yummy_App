import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";

export default function Search() {

  let [meals, setMeals] = useState([]);


  async function getMealsByName(type , name) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${name}`
    );
    console.log(data.meals);
    name && data.meals && setMeals(data.meals);
  }

  getMealsByName();
  // function getMealsByFirstLetter() {}

  return (
    <>
      <div className="row py-4 ms-5 mx-auto">
        <div className="col-md-6 ">
          <input
            onChange={(e) => getMealsByName("s" , e.target.value)}
            type="text"
            placeholder="Search By Name"
            className="form-control my-5"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search By First Letter"
            maxLength="1"
            className="form-control my-5 "
            onChange={(e) => getMealsByName('f' , e.target.value)}
          />
        </div>
      </div>

      <div className="row g-3">
          {meals.length ? meals.map((meal , index) => <Card key={index} meal= {meal}/> ) : <h2>No Meals Founded</h2>}
      </div>
    </>
  );
}
