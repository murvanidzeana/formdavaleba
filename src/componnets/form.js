import "./form.css"
import Rectangle1 from "../pictures/Rectangle 7.png";
import Rectangle2 from "../pictures/Rectangle 8.png";
import { useState } from "react";

export default function Form(){


    
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  

    const button = () =>{
        console.log({
         
          email,
          password,
          
    
        })
    
      
    
       if( password.length>8){
        return alert ("პაროლი უნდა იყოს 8 სიმბოლოზე ნაკლები")
       }
    
    
        
      if(  email.length ===0 || password.length ===0 )
      { return alert (" შეავსეთ ყველა ველი")}
    
      }
    

    return(


    <div className="App">
        
        <img src={Rectangle2} className='Rectangle2' alt="" />
        
    
       
        <div className="Form">
            <div className="Create">
                <h1>Create An Account</h1>
                
                <h2 >without any ads for free!</h2>
                <h2 className="create_h2">Create an account to enjoy all the services </h2>
               
               

            </div>


            <div className="Input_veli">
                <input type="email" placeholder="Email Adress" onChange={(event)=>setEmail(event.target.value)} />
                <input type="password" placeholder="password"  onChange={(event)=>setPassword(event.target.value)}/>
                <button  onClick={button}>Create Account</button>
                <h3>Already Have An Account? <span>Sign In</span></h3>

            </div>

        </div>
        <div className="Rectangle1">
        <img src={Rectangle1}  alt="" />
        </div>

        
        

    </div>


    )
}