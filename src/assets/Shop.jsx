import { useState } from "react"
import { useCart } from "./CartContent"
import { useLocation, Link } from "react-router-dom"

//cakes imges
import ChocolateCake from '/public/chocola.jpeg'
import OreoDrip from '/public/Oreo Drip-Cake.jpeg'
import Vanilla from '/public/Vanilla and White Chocolate Cake.jpeg'
import Pastel from '/public/Pastel-Watercolour-Cake.jpeg'
import Floral from '/public/Floral-Golden-Drip-Cake.jpeg'
import Classic from '/public/clasic-chocolate-cake.jpeg'

//cupcake images
import girlBoss from '/public/Girl-boss-cupcake.webp'
import oreoCup from '/public/oreo-cupcakes.webp'
import sunflower from '/public/sun-flower-cupcake.webp'
import redVelvet from '/public/red-velvet-cupcakes.webp'

//Biscuits Images
import azancBisc from '/public/azanc family bisc.webp'
import butterBisc from '/public/butter-bisc.webp'
import shortBred from '/public/traditional short bred.webp'
import MidNav from "./MidNav"


export default function Shop(){
  // const [count, setCount] = useState(() => parseInt(localStorage.getItem('count')) || 0);
  const {addToCart} = useCart()
  const location = useLocation();
  const isCakesRoute = location.pathname === '/cakes';
  const isCupCakesRoute = location.pathname === '/cupcakes';
  const isShop = location.pathname === '/shop';
  const isBiscuits = location.pathname === '/biscuits';
  

    const [cakeProducts] = useState([
        {
          name: "Chocolate Cake",
          description: "",
          price: 350,
          totalPrice: 0,
          img: ChocolateCake
 ,
incart: 0       },
        {
            name: "Classic Chocolate Cake",
            description: "",
            price: 500,
            totalPrice: 0,
            img: Classic
   ,
  incart: 0       },
          {
            name: "Floral Golden Drip Cake",
            description: "",
            price: 650,
            totalPrice: 0,
            img: Floral
   ,
  incart: 0       },
          {
            name: "Oreo Drip Cake",
            description: "",
            price: 450,
            totalPrice: 0,
            img: OreoDrip
   ,
  incart: 0       },
          {
            name: "Vannilla and White Chocolate Cake",
            description: "",
            price: 550,
            totalPrice: 0,
            img: Vanilla
   ,
  incart: 0       },     
           {
            name: "Pastel Watercolour Cake",
            description: "",
            price: 300,
            totalPrice: 0,
            img: Pastel
   ,
  incart: 0       },
    ])

    const [cupCakeProducts] = useState([
   {
        name: "Sunflower Cupcake",
        description: "",
        price: 70,
        totalPrice: 0,
        img: sunflower,
        incart: 0
      },    {
        name: "Red Velvet Cupcake",
        description: "",
        price: 45,
        totalPrice: 0,
        img: redVelvet,
        incart: 0
      },    {
        name: "Oreo Cup Cake",
        description: "",
        price: 40,
        totalPrice: 0,
        img: oreoCup,
        incart: 0
      },    {
        name: "Girl Boss CupCake",
        description: "",
        price: 85,
        totalPrice: 0,
        img: girlBoss,
        incart: 0
      },

  ])

  const [biscuitsProducts] = useState([
    {
         name: "Anzac Family Biscuits",
         description: "",
         price: 30,
         totalPrice: 0,
         img: azancBisc
,
incart: 0       }, 
       {
        name: "Butter Biscuits",
        description: "",
        price: 40,
        totalPrice: 0,
        img: butterBisc,
        incart: 0
      }, 
      {
        name: "Traditional Short Bred",
        description: "",
        price: 50,
        totalPrice: 0,
        img: shortBred,
        incart: 0
      }, 
      ])

  // function addToCart (){
  //   const updatedCount = (count ?? 0) + 1;
  // localStorage.setItem('count', updatedCount);
  // console.log('clicked');
  // setCount(updatedCount);
  // }

    return(
        <>
        <MidNav text = "Welcome To Our Shop"/>
        {/* Cake products */}
{(isCakesRoute || isShop) && (
        <div className="cakes-product">
          <h2>Cakes</h2>
              <div className="cake-store">
    {cakeProducts.map((product, index) =>(
        <div key={index}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h4>R{" " + product.price}.00</h4>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
))}
</div><br /><br /><br />
        </div>
      )}

      {/* CupCakes products */}

{(isCupCakesRoute || isShop) && (
        <div className="cakes-product">
          <h2>Cupcakes</h2>
              <div className="cup-cake-store">
    {cupCakeProducts.map((product, index) =>(
        <div key={index}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h4>R{" " + product.price}.00</h4>
            <button onClick={()=>addToCart(product)}
            name={product.name}>Add to Cart</button>
            </div>
))}
</div><br /><br /><br />
        </div>
      )}

   {/* Biscuits products div */}
{(isBiscuits || isShop) && (
        <div className="cakes-product">
          <h2>Biscuits</h2>
              <div className="cup-cake-store">
    {biscuitsProducts.map((product, index) =>(
        <div key={index}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h4>R{" " + product.price}.00</h4>
            <button onClick={()=>addToCart(product)}
            name={product.name}>Add to Cart</button>
            </div>
))}
</div><br /><br /><br />
        </div>
      )}
     
     <Link to={'/'}><button>Go Back Home</button></Link>
    </>

    )
}
