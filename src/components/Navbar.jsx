import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const links = [
  {
    title: "Home",
    link: "/",
  },
  //   add the other link as well
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
];


export const Navbar = () => {


  return (

    <ul className={styles.nav}>

      {links.map((el,index) => (

        <Link to={el.link} key={index}>
          <li>{el.title}</li>
        </Link>

      ))}

    </ul>



  );
};
