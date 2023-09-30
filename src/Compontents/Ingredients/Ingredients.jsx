import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardIngredients from '../CardIngredients/CardIngredients';
import Loading from '../Loading/Loading';


export default function Ingredients() {


 let [Ingredients , setIngredients] = useState(null)

 async function getIngredients() {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    console.log(data.meals);
    setIngredients(data.meals.slice(0, 20))
 }


 useEffect(() => {
    getIngredients()
 } , [])
  return (
    <>
    {Ingredients ? <div className='row py-5'>
    
    {Ingredients.map((ingredient , index) => 
       <CardIngredients Ingredients ={ingredient} key={index}/>
      
       )}
   </div> : <Loading/>}
    </>
  )
}
