import { useCart } from "./CartContent";

export default function DisplayCart(){
   const{displayCart} = useCart()
 return(
    displayCart()
 )
}