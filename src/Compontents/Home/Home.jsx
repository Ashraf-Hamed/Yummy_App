import  { useEffect, useState } from 'react'
import Card from '../Card/Card'

import axios from 'axios'
import Loading from '../Loading/Loading'



export default function Home() {

 let [meals , setMeals] = useState([])  

  async function getMeals() {
    let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    setMeals(data.meals);
  }


useEffect(() => {
  getMeals()
} ,[])


  return (
    <>



    {meals.length ?  <div  className='row my-5 g-3'>
              {meals.map((meal) => 
                  <Card key={meal.idMeal}   meal= {meal}/>     
              )}
    </div> : <Loading/>}
   
      
    </>
  )
}
