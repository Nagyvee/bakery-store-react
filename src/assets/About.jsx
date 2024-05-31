import aboutImge1 from '/public/bakery-about-img.jpeg'
import aboutImge2 from '/public/bakery-about-img2.webp'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>

     <h2 className='about-heading'>Our Story</h2>
      <div className="about-container">
        <div className="about-images">
            <img src={aboutImge1} alt="about-sec image" />
            <img src={aboutImge2} alt="about-sec image" />
        </div>
        <div className="about-text">
          <h3>Our Bakery&apos;s Mission</h3>
          <p>
            At Teams Bakery, we are dedicated to making a positive impact right
            in our local communities and homes.
          </p>
          <p>
            Our initiatives focus on providing direct assistance to those in
            need, reflecting our commitment to creating a difference where it
            matters most. Teams Bakery actively raises funds through engaging
            community events, fostering community involvement, and promoting
            grassroots awareness about our delicious creations.
          </p>

          <p>
            We contribute significantly to our community by supporting various
            causes, such as celebrating National Bakery Day and organizing
            #Bake4Hope fundraisers.
          </p>
          <h3>Community Impact</h3>
          <p>
            At Teams Bakery, we are dedicated to making a positive impact right
            in our local communities and homes. Our initiatives focus on
            providing direct assistance to those in need, reflecting our
            commitment to creating a difference where it matters most. Teams
            Bakery actively raises funds through engaging community events,
            fostering community involvement, and promoting grassroots awareness
            about our delicious creations. We contribute significantly to our
            community by supporting various causes, such as celebrating National
            Bakery Day and organizing #Bake4Hope fundraisers.
          </p>
          <p>
            Over the past decade, our bakery has generously donated wheelchairs
            and prosthetic limbs to children bravely facing the aftermath of
            cancer. Additionally, we&apos;ve provided essential medical
            equipment, PPE gear, educational toys, and even transformed hospital
            rooms into uplifting spaces.
          </p>
          <h3>Community Impact</h3>
          <p>
            Over the past decade, our bakery has generously donated wheelchairs
            and prosthetic limbs to children bravely facing the aftermath of
            cancer. Additionally, we&apos;ve provided essential medical
            equipment, PPE gear, educational toys, and even transformed hospital
            rooms into uplifting spaces.
          </p>
          <p>
            Join us as we continue to make a meaningful impact, one delightful
            treat at a time. Together, we&apos;re not just a bakery; we&apos;re
            a community that cares.
          </p>
          <Link to={'/shop'}><button>Shop</button></Link>
        </div>
      </div>
    </>
  );
}
