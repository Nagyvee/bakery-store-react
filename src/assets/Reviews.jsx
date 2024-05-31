import { useState } from "react"
import img1 from "/public/woman-avatar.jpeg";
import img2 from "/public/man-avatar.jpeg";

export default function Reviews(){
const imgStyle = {
    width: '90px',
    borderRadius: '50%'
}


    const [reviewsInfo] = useState(
      [
        {
            Name: 'Lucky Sibindi',
            comment: 'Great service and good quality products',
            img: img2,
            rating: '⭐⭐⭐⭐⭐'
        },
        {
            Name: 'Martha Pary',
            comment: "Keep it up I'm satisfied.",
            img: img1,
            rating: '⭐⭐⭐⭐'
        },
        {
            Name: 'John Klyle',
            comment: 'Quick delivery and customer friendly.',
            img: img2,
            rating: '⭐⭐⭐⭐⭐'
        },
        {
            Name: 'Mike Oshea',
            comment: 'Awesome!',
            img: img2,
            rating: '⭐⭐⭐⭐⭐'
        },
      ]
    ) 

        return (
            <>
            <div className="reviews">
              <h2 className="review-heading">What They Say About Us</h2>
            <div className="reviews-container">
              {reviewsInfo.map((review, index) => (
                <div key={index} onClick={()=>(alert('User not Found'))}>
                    <img src={review.img} alt={review.Name} style={imgStyle}/>
                  <h3>{review.Name}</h3>
                  <p>{review.comment}</p>
                  <p>{review.rating}</p>
                </div>
              ))}
            </div>
            </div>
            </>
    )
}