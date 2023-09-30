import React from 'react'
import { Link } from 'react-router-dom';

export default function CardIngredients({Ingredients}) {
  return (
    <>
    <div className="col-md-3">
    <Link to={`/ingerdients/${Ingredients.strIngredient}`}>
    <div  className="rounded-2 text-center cursor-pointer text-white">
            <i className="fa-solid fa-drumstick-bite fa-3x my-3"></i>
            <h3 className = "fs-4">{Ingredients.strIngredient}</h3>
            <p > {Ingredients.strDescription.split(" ").slice(0,20).join(" ")}</p>
           
    </div>
    </Link>
</div>
    </>
  )
}
