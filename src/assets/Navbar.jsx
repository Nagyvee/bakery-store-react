import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "./CartContent";
import { useLocation } from "react-router-dom";

export default   function Navbar(){ 
    const {count} = useCart()
    const Navigation = () => {
  const location = useLocation();

  const activePage = (path) => {
    // Use location.pathname to get the current path
    return location.pathname === path ? 'active' : '';
   }

    //active page link
 

    return (
        <>
        <nav>
        <div className="nav-logo">
            <h3>Teams Bakery</h3>
        </div>
        <div className="nav-links">
        <Link to={'/'}><div className={`links-el nav-home ${activePage('/')}`}>Home</div></Link>
        <Link to={'/about'}><div className={`links-el nav-about ${activePage('/about')}`}>About</div></Link>
        <Link to={'/shop'}><div className={`links-el nav-about ${activePage('/shop')}`}>Shop</div></Link>
        <Link to={'/reviews'}><div className={`links-el nav-about ${activePage('/reviews')}`}>Reviews</div></Link>
        <Link to={'/contact'}><div className={`links-el nav-contact ${activePage('/contact')}`} >Contact</div></Link>
        <Link to={'/cart'}><div className={`links-el nav-cart ${activePage('/cart')}`} > <FontAwesomeIcon icon={faShoppingCart} className="nav-cartalogue"/>
        <span>{count}</span>
        </div></Link>
       
        </div>
        </nav>
        </>
    )
    }
    return <Navigation />
}

