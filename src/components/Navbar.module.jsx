import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const links = [
  {
    title: "Home",
    link: "/",
  },
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
    <ul className={styles.navbar}>
      {links.map((el,index) => (
        <Link to={el.link} key={index}>
          <li>{el.title}</li>
        </Link>
      ))}
    </ul>
  );
};
