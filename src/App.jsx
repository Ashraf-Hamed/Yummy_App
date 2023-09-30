
import { createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";

import Layout from "./Compontents/Layout/Layout";
import Home from "./Compontents/Home/Home";
import Details from "./Compontents/Details/Details";
import Search from "./Compontents/Search/Search";
import Category from "./Compontents/Category/Category";
import Contact from "./Compontents/Contact/Contact";
import SubCategory from "./Compontents/SubCategory/SubCategory";
import Area from './Compontents/Area/Area';
import AreaMeal from "./Compontents/AreaMeal/AreaMeal";
import Ingredients from "./Compontents/Ingredients/Ingredients";
import IngredientsMeal from "./Compontents/IngredientsMeal/IngredientsMeal";



let routes = createHashRouter([
  { path: "/",element: <Layout />,children: [
    {index : true, element: <Home /> },
    {path : '/search', element: <Search /> },
    {path : '/category', element: <Category /> },  
    { path: "category/:name", element: <SubCategory /> },
    {path : '/area', element: <Area /> }, 
    {path : '/area/:name', element: <AreaMeal /> }, 
    {path : '/ingerdients', element: <Ingredients /> }, 
    {path : '/ingerdients/:name', element: <IngredientsMeal /> }, 
    {path : '/contact', element: <Contact /> }, 
    {path : '/:id', element: <Details /> },
  ],
  },
]);
export default function App() {
  return <>
  
   <RouterProvider router={routes}></RouterProvider>
  </>;
}
