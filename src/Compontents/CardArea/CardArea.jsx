import React from 'react'
import { Link } from 'react-router-dom';

export default function CardArea({area }) {
  return (
    <> 
    <div className="col-md-3" > 
    <Link to={`/area/${area.strArea}`}>
    <div  className="rounded-2 text-white  text-center cursor-pointer" >
            <i className="fa-solid fa-house-laptop fa-4x my-3 "></i>
            <h3>{area.strArea}</h3>
    </div>
    </Link>
     </div>
    </>
  )
}
