import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Card from '../Card/Card'

export default function IngredientsMeal() {

let {name} = useParams()
let [meals , setMeals] = useState([])

async function getMeal() {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    console.log(data.meals);
    setMeals(data.meals);
}


useEffect(() => {
    getMeal()
} , [])
  return (
    <>
    {meals ? (
        <div className="row py-5">
          {meals.map((meal) => (
            <Card key={meal.idMeal}   meal= {meal}/>      
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
