import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import Card from './../Card/Card';

export default function SubCategory() {

  let {name} = useParams()

 
    let [details , setDetails] = useState(null)
    async function getSubCategory() {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      console.log(data.meals);
      setDetails(data.meals);
    }
  
    useEffect(() => {
      getSubCategory();
    }, []);
  
 
  return (
    <>

    {details ? (
      <div className="row py-5">
        {details.map((meal) => (
          <Card key={meal.idMeal}   meal= {meal}/>      
        ))}
      </div>
    ) : (
      <Loading />
    )}
  
  
    </>
)}
