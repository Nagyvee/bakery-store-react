import { Link } from "react-router-dom";

export default function ProductsType() {
  return (
    <>
    <h2 className="products-heading">Our Products</h2>
      <div className="products-container">
      <div className="elementor-div cakes-main">
       <Link to={'/cakes'}> 
          <button>Cakes</button>
          </Link>
        </div>
        <div className="elementor-div cup-cakes-main">
          <Link to={'/cupcakes'}><button>Cup Cakes</button></Link>
        </div>
        <div className="elementor-div biscuits-main">
          <Link to={'biscuits'}><button>Biscuits</button></Link>
        </div>
      </div>
    </>
  );
}
