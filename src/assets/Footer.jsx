import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    function handleSubmit(){
        event.preventDefault()
       const InputEl = document.querySelector('input')
        if(InputEl.value){
            alert('submitted')
            InputEl.value =''
        }else{
            alert('Enter Your Email')
        }
    }
    return(
        <div className="footer">
            <div>
                <h4>Find Us:</h4>
                <address><span>Address:</span> 118 President Str, Kimberly 5290</address>
                <p><span>Call:</span> +27 1155 246 332</p>
                <p><span>Email:</span>  Teambakery@gmail.com</p>
                </div>
            <div className="register">
                <h4>Register for our Newsletter</h4>
                <form action="submit" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <button>Submit</button>
                </form>
                </div>
            <div>
            <h4>Get in touch with us on</h4>
            <FontAwesomeIcon icon={['fab', 'facebook']}  className='social-icons facebook'/>
            <FontAwesomeIcon icon={['fab', 'instagram']} className='social-icons instagram'/>
            <FontAwesomeIcon icon={['fab', 'twitter']} className='social-icons facebook'/>
            <FontAwesomeIcon icon={['fab', 'tiktok']} className='social-icons tiktok'/>
            </div>
        </div>
    )
}