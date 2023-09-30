import { useRef } from 'react';
import logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {

 let Sidebar = useRef(null)
 let innerDiv = useRef(null)
 let SideBarIcon = useRef(null)


 function ChangeStatus() {


  let left = window.getComputedStyle(Sidebar.current).getPropertyValue('left')
 

  if(left == '0px') {
    closeSideBar()
  }
  else{
    openSideBar()
  }
 }


 function closeSideBar() {
  let width = innerDiv.current.offsetWidth
  Sidebar.current.style.left = `-${width}px`;
  SideBarIcon.current.classList.replace('fa-xmark' , 'fa-bars'  )


 }


 function openSideBar() {
  
  Sidebar.current.style.left = '0px'
  SideBarIcon.current.classList.replace('fa-bars' , 'fa-xmark')
 }


  return (
    <>
    
    <nav ref={Sidebar} >

      <div className="d-flex justify-content-center align-items-start ">

          <div ref={innerDiv} className="nav-content d-flex flex-column justify-content-between ps-4 py-4    ">
              <div className="nav-item">
                  <ul className="list-unstyled">
                    <li><Link to='/search'  onClick={closeSideBar} className="nav-link" id="search" >Search</Link></li>
                    <li>
                      <Link to='/category' onClick={closeSideBar} className="nav-link" id="Categories" >Categories</Link>
                    </li>
                    <li><Link to='/area' onClick={closeSideBar} className="nav-link" id="Area" >Area</Link></li>
                    <li>
                      <Link to='/ingerdients' onClick={closeSideBar} className="nav-link" id="Ingredients" >Ingredients</Link>
                    </li>
                    <li>
                      <Link to='/contact' onClick={closeSideBar} className="nav-link" id="Contact" >Contact Us</Link>
                    </li>
                  </ul>
              </div>

              <div className="nav-contact ">
                  <div className="icon d-flex justify-content-center gap-5 py-3">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-globe"></i>
                  </div>

                  <div className="copy-right ">
                      <p>Copyright A.H© 2023 All Rights Reserved.</p>
                  </div>

              </div>
          </div>

          <div className="control d-flex flex-column justify-content-between align-items-center py-3">
              <div className="logo">
                 <Link to = '/'><img src={logo}  alt="logo-img" className="w-75 ms-2"/></Link> 
              </div>

              <div className="icon-control ">
                  <i onClick={ChangeStatus} ref={SideBarIcon} className="fa-solid fa-bars fa-2x " id="openNavBar"></i>
              </div>

              <div className="sharing-icon d-flex flex-column gap-2">
                  <i className="fa-solid fa-globe mb-1"></i>
                  <i className="fa-solid fa-share-nodes"></i>
                 
              </div>
          </div>
      </div>
     
    </nav>
 
    </>
  )
}

