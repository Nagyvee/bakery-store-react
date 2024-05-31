import MidNav from "./MidNav"

export default function Contact(){
    return(
        <div className="contact-container">

<MidNav text='Contact Us'/>

            <div className="contact-form-wrapper">
                <div className="contact-form-contacts">
                    <h3>Call Kyle on</h3>
                    <h3>+27 1234123 </h3>
                    <h3>Or Provide Your Details Will Contact You</h3>
                    <ul>
                        <li>T</li>
                        <li>H</li>
                        <li>A</li>
                        <li>N</li>
                        <li>K</li>
                        <li>Y</li>
                        <li>O</li>
                        <li>U</li>
                    </ul>
                </div>

                <div className="contact-form">
                    <form action="submit">
                    <input className="input-el" type="text" />
                    <label htmlFor="name">Name</label>
                    <input className="input-el" type="text" />
                    <label htmlFor="surname">Surname</label>
                    <input className="input-el" type="email" />
                    <label htmlFor="email">Email</label>
                    <input className="input-el" type="tel" />
                    <label htmlFor="phone">Phone</label>
                    <textarea name="" id="" cols="30" rows="10"/>
                    <label htmlFor="message">Leave a Message</label><br /><br />
                    <input type="checkbox" className="checkbox"/>
                    <label htmlFor="checkbox">Agree Terms and Conditions</label><br /><br />
                    <button>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    )
}