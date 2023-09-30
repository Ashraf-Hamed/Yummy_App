import axios from "axios";
import { Link } from "react-router-dom";

export default function CardCategory({ category, getSubCategory }) {
  return (
    <>
      <div className="meals col-md-3 col-sm-6 mb-3 ">
        <Link to={`/category/${category.strCategory}`}>
          <div className="meals  position-relative cursor-pointer overflow-hidden rounded-2 cursor-pointer text-center">
            <img src={category.strCategoryThumb} className="w-100" alt="" />
            <div className="meal-layer position-absolute d-flex flex-column align-items-center text-black p-2">
              <h3>{category.strCategory}</h3>
              <p>
                {category.strCategoryDescription
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
