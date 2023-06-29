import "./form.css"
import Rectangle1 from "../pictures/Rectangle 7.png";
import Rectangle2 from "../pictures/Rectangle 8.png";

export default function Form(){
    return(


    <div className="App">
        
        <img src={Rectangle2} className='Rectangle2' alt="" />
        
    
       
        <div className="Form">
            <div className="Create">
                <h1>Create An Account</h1>
                <h2>Create an account to enjoy all the services <span>without any ads for free!</span></h2>

            </div>


            <div className="Input_veli">
                <input type="email" placeholder="Email Adress"/>
                <input type="password" placeholder="password" />
                <button>Create Account</button>
                <h3>Already Have An Account? <span>Sign In</span></h3>

            </div>

        </div>
        <div className="Rectangle1">
        <img src={Rectangle1}  alt="" />
        </div>

        
        

    </div>


    )
}