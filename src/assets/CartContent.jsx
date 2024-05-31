import { createContext, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(
    () => parseInt(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCount = parseInt(localStorage.getItem("count")) || 0;
      setCount(updatedCount);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  localStorage.setItem("count", count);

  // add item to shopping Cart
  const addToCart = (product) => {
    const updatedCount = count + 1;

    let cartItems = localStorage.getItem("itemsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      if (cartItems[product.name] == undefined) {
        cartItems = { ...cartItems, [product.name]: product };
      }
      cartItems[product.name].incart += 1;
      cartItems[product.name].totalPrice =
        cartItems[product.name].price * cartItems[product.name].incart;
    } else {
      product.incart += 1;
      product.totalPrice = product.price * product.incart;
      cartItems = {
        [product.name]: product,
      };
    }
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));

    setCount(updatedCount);
    totalCost(product);
  };

  // calculate total cost of all items
  function totalCost(product) {
    let total = localStorage.getItem("cartTotal");
    total = parseInt(total);
    if (!total) {
      localStorage.setItem("cartTotal", product.price);
    } else {
      localStorage.setItem("cartTotal", total + product.price);
    }
  }
  //Add button on cart
  function addItem(itemName) {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let cartNumber = JSON.parse(localStorage.getItem("count"));
    let total = JSON.parse(localStorage.getItem("cartTotal"));

    if (cartItems[itemName].incart < 50) {
      cartItems[itemName].incart += 1;
      cartItems[itemName].totalPrice =
        cartItems[itemName].incart * cartItems[itemName].price;
      let item = cartItems[itemName];
      cartNumber += 1;

      localStorage.setItem("cartTotal", total + item.price);
      localStorage.setItem("count", JSON.stringify(cartNumber));
      localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
      displayCart();
    } else {
      alert("Maximum quantity reached on this item");
    }

    setCount(cartNumber);
  }

  //subtract button on cart
  function subtractItem(itemName) {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let cartNumber = JSON.parse(localStorage.getItem("count"));
    let total = JSON.parse(localStorage.getItem("cartTotal"));

    if (cartItems[itemName].incart > 1) {
      cartItems[itemName].incart -= 1;
      cartItems[itemName].totalPrice =
        cartItems[itemName].incart * cartItems[itemName].price;
      let item = cartItems[itemName];
      cartNumber -= 1;

      localStorage.setItem("cartTotal", total - item.price);
      localStorage.setItem("count", JSON.stringify(cartNumber));
      localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    }
    setCount(cartNumber);
  }

  //Delete item on the cart
  function deleteItem(itemName) {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let cartNumber = JSON.parse(localStorage.getItem("count"));
    let total = JSON.parse(localStorage.getItem("cartTotal"));

    let item = cartItems[itemName];
    cartNumber -= item.incart;
    delete cartItems[itemName];

    localStorage.setItem("cartTotal", total - item.totalPrice);
    localStorage.setItem("count", JSON.stringify(cartNumber));
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));

    setCount(cartNumber);
  }

  //render items on UI
  function displayCart() {
    let cartItems = localStorage.getItem("itemsInCart");
    const totalToPay = localStorage.getItem("cartTotal");
    cartItems = JSON.parse(cartItems);

    if (cartItems && totalToPay > 0) {
      return (
        <div className="display-container">
          <h1>Your Shoping Cart:</h1>
          <div className="display-headings">
            <h3>Item:</h3>
            <h3>Price:</h3>
            <h3>Qty:</h3>
            <h3>Total Price:</h3>
          </div>
          {Object.keys(cartItems).map((itemName) => {
            const item = cartItems[itemName];
            return (
              <div key={itemName} className="display-item">
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  onClick={() => deleteItem(itemName)}
                  className="icon-delete"
                />
                <img src={item.img} alt="" />
                <p>
                  <b>{itemName}</b>
                </p>
                <p className="total-price">R {item.price}</p>
                <p className="total-price quantity">
                  <FontAwesomeIcon
                    className="icon-minus"
                    icon={faCircleMinus}
                    onClick={() => subtractItem(itemName)}
                  />
                  <span>{item.incart}</span>
                  <FontAwesomeIcon
                    className="icon-plus"
                    icon={faCirclePlus}
                    onClick={() => addItem(itemName)}
                  />
                </p>
                <p>
                  R <span className="total-price">{item.totalPrice}</span>
                </p>
              </div>
            );
          })}
          <div className="display-total">
          <div className="total-text">Total:</div>
          <div>R {totalToPay}</div>
          </div>
          <button>Checkout</button>
        </div>
      );
    } else {
      return (
        <div className="display-container no-items-text">
          <h2>No items in your cart</h2>
          <Link to={"/shop"}>
            <button>Go to Shop</button>
          </Link>
        </div>
      );
    }
  }

  return (
    <CartContext.Provider value={{ count, addToCart, displayCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
