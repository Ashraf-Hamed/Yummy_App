import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import CardCategory from "../CardCategory/CardCategory";


export default function Category() {


let [category , setCategory] = useState([])

  async function getCategories() {
    let {data} = await axios.get( `https://www.themealdb.com/api/json/v1/1/categories.php`)
    console.log(data.categories);
    setCategory(data.categories);
  }



  

  useEffect(() => {
    
  getCategories()
  } , [])
  return (
    <>


    {category ?  <div  className='row my-5 g-3'>
    {category.map((cat) => 
        <CardCategory key={cat.idCategory}  category = {cat}   />     
    )}
</div> : <Loading/>}
  
      
    </>
  )
}
