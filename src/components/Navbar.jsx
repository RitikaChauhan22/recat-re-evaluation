import React from "react";
import "../../src/Styles/Navbar.css";
import { useNavigate } from "react-router-dom";


const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
];
export const Navbar = () => {

  const navigation = useNavigate();
  const HomeNavigation = () => {

     navigation("/");

  }

  const AboutNavigation = () => {

    navigation("/about");

 }

 const ProductNavigation = () => {

  navigation("/products");

}



  return (
    
    <div>
    
      <div id="nav-container">

        <div id="main-container">

           <div onClick={HomeNavigation} className="div">Home</div>

           <div onClick={AboutNavigation} className="div" style={{marginLeft: "5%"}}>About</div>

           <div onClick={ProductNavigation} className="div">Products</div>

        </div>

      </div>
      
    </div>

  );
};
