import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading"

export default function Details() {

 let {id}  = useParams() ;
 
 let [details , setDetails] = useState({})

 async function getMealsDetails() {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    // setDetails(data.meals[0]);
    return data.meals[0] ;
    
 }



 async function getRecipes() {
  let detailsObject = await  getMealsDetails();

  detailsObject.ingredient = [] ;
  const detailsMap = new Map (Object.entries(detailsObject));

  for(let i = 0; i < detailsMap.size ; i++)  {
    if(detailsMap.get(`strIngredient${i}`)) {
      detailsObject.ingredient.push(`${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(`strIngredient${i}`)}`)
    }

    setDetails(detailsObject)
  }
 }
 useEffect(() => {
  getRecipes()
 } , [])
  return (
    <>

  {details ?  <div className="row mt-5 gx-5">
      
  <div className="col-md-4 ">
  <img
    src= {details.strMealThumb}
    className="mb-2 rounded-3 w-100 rounded-3"
    alt=""
  />

  <h3 className="text-white py-3">{details.strMeal}</h3>
  <a href="/" className="btn btn-warning w-100">Back To Home</a>
</div>

<div className="col-md-8 ">
  <div className="des-detaialis text-white text-start">
    <h2 >Instructions</h2>
    <p>{details.strInstructions}</p>
    <h2>Area : {details.strArea} </h2>
    <h3>Category : {details.strCategory} </h3>
  </div>

  <div className="Recipes">
    <h3 className="text-info mb-4 ">Recipes :  
     {details.ingredient?.map((item ,index)=>  <span key={index} className=" mx-2 btn btn-warning me-2 mt-2">{item}</span>)}
    </h3>
  </div>

  {details.strTags &&  
    <div className="Tags mb-3">
    <h3 className="text-info mt-3 mb-4">Tags : {details.strTags?.split(' , ').map((item ,index)=>  <span key={index} className=" mx-2 btn btn-warning me-2 mt-2">{item}</span>)}</h3>
  </div>  }
  

  <div className="buttonsLinks mb-5 ms-2">
    <a
      href={details.strSource}
      className="btn btn-success me-2"
      target="_blank"
    >
      Source
    </a>
    <a
    href={details.strYoutube}
      className="btn btn-danger"
      target="_blank"
    >
      Youtube
    </a>
  </div>
</div>
  </div> : <Loading/>}
    
    </>
  );
}
