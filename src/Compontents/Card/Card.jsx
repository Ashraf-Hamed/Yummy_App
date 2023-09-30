import { Link } from "react-router-dom";

export default function Card({ meal }) {
 

  return (
    <>
      <div className="meals col-md-3 col-sm-6 mb-3" >
        <Link to={`/${meal.idMeal}`}>
           <div className="meals position-relative overflow-hidden rounded-2 cursor-pointer text-center"  >
            <img src={meal.strMealThumb} className="w-100" alt="" />
            <div className="meal-layer position-absolute d-flex align-items-center text-black justify-content-center p-2">
              <h3>{meal.strMeal}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
