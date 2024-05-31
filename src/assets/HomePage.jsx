import img1 from "/public/bakery-hero-img1.jpeg";
import img2 from "/public/bakery-hero-img2.jpeg";
import img3 from "/public/bakery-hero-img3.jpeg";
import img4 from "/public/bakery-hero-img4.jpeg";
import About from './About'
import Reviews from "./Reviews";
import ProductsType from "./ProductsType";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//creating slide show for hero sec imgs
let slideIndex = 0;
function slideShow() {
    let i;
    let slides = document.getElementsByClassName('slides')
    //loop over all images && display none them
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 4000);
}


function HomePage(){
    useEffect(() => {
        slideShow();
      }, []);

    return(
        //Hero Section//
        <>
        <div className="section-container">
            <div className="home-hero">
            <div className="hero-flex-divs">
            <div className="hero-text">
            <h2>Experience Teams Bakery Magic:</h2>
            <p>Step into a world where magic happens daily at Teams Bakery.
                 From the first rays of sunlight to the quiet moments of dusk,
                  our ovens are alive, creating magic in the form of delectable treats.</p>
                  <p> Whether you&apos;re celebrating life&apos;s milestones or simply craving a sweet escape, Teams Bakery is here to make every moment memorable.
                    Join us in savoring the magic of fresh, flavorful, and unforgettable delights.</p>
                    <Link to={'/contact'}><button>Contact Us</button></Link>
                    </div>
                    <div className="hero-images">
                      <img src={img1} alt="hero-img" className="slides" />
                      <img src={img2} alt="hero-img" className="slides" />
                      <img src={img3} alt="hero-img" className="slides" />
                      <img src={img4} alt="hero-img" className="slides" />
                    </div>
                    </div>
            </div>
        </div>

            <ProductsType />
            <About />
            <Reviews />
   
        </>
    )
}

export default HomePage;








