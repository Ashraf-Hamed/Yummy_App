import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardArea from '../CardArea/CardArea';
import Loading from '../Loading/Loading';

export default function Area() {


 let [areas , setArea]  = useState([])

    async function getArea() {
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        console.log(data.meals);
        setArea(data.meals)
    }

   
    useEffect(() => {
        getArea()
    } ,[])

  return (
    <>

    {areas ? <div className='row py-5'>
    
     {areas.map((area , index) => 
        <CardArea area ={area} key={index}/>
       
        )}
    </div> : <Loading/>}
   
    </>
  )
}
