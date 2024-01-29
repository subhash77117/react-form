import {useState} from "react"
import './App.css';

function App() {
  const [fromdata,setFormData]=useState({
    fname:"",
    lname:"",
    middlename:"",
    email:"",
    country:"Select",
    address:"",
    zipCode:"",
    city:"",
    comments:false,
    condidate:false,
    offers:false,
    Nopushemail:"",
  });
  

  function changeHandler(event){
    const {name,Checked,type}=event.target
    setFormData(preFromData=>{
      return{ ...preFromData,
        [name]: type === "checkbox" ? Checked: event.target.value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("printing the final data");
    console.log(fromdata)

  }
  return (
   <div className="main-container">
   <h1 className="heading">fill the form</h1>
       <div className="from-contianer">
          <form onSubmit={submitHandler}>
             <p> First Name</p>
             <input type="text" placeholder="first name" name="fname" className="inputType"
              value={setFormData.fname} 
              onChange={changeHandler} />

             <p>middle name</p>
             <input type="text" placeholder=" middlename" name="middlename" className="inputType"
             onChange={changeHandler} value={setFormData.middlename}/>   

              <p> Last Name</p>
              <input type="text" placeholder="last name" name="lname" className="inputType"
              value={setFormData.lname}
              onChange={changeHandler} /> 

             <p> Email address</p>
              <input type="email" placeholder="your email" name="email" className="inputType"
              value={setFormData.lname}
              onChange={changeHandler} /> 


             <p>Country</p>
             <select id="country" value={fromdata.country} onChange={changeHandler} name="country"
             >
              <option>select</option>
              <option>India</option>
              <option>Nepal</option>
              <option>USA</option>
              <option>Japan</option>
              <option>UAE</option>
             </select>

             <p> Address</p>
             <input type="text" placeholder="Address" name="address" className="inputType"
              value={setFormData.address} 
              onChange={changeHandler} />

             <p> Zip Code</p>
             <input type="number" placeholder="zip code" name="zipCode" className="inputType"
              value={setFormData.zipCode} 
              onChange={changeHandler} />

              <p> city</p>
             <input type="text" placeholder="city" name="city" className="inputType"
              value={setFormData.city} 
              onChange={changeHandler} />
              <br></br>

              <p>By Email</p>
              <input
                id="emid"
                name="comments"
                type="checkbox"
                checked={setFormData.comments}
                onChange={changeHandler}
              />
              <label htmlFor="emid"> comments</label>
              <p>Get notificed when someone post the comments</p>
              <br></br>

             
              <input
                id="comment"
                name="condidate"
                type="checkbox"
                checked={setFormData.condidate}
                onChange={changeHandler}
               
              />
               <label htmlFor="comment">  Condidate</label>
               <p>Get notificed when Condidate aplies for a job</p>
               <br></br>

               
              <input
                id="offer"
                name="offers"
                type="checkbox"
                checked={setFormData.offers}
                onChange={changeHandler}
               
              />
             
               <label htmlFor="offer">  offers</label>
               <p>Get notificed when someone Condidate accept the offers and rejects</p>


               <fieldset>
                <legend>Push Notification</legend>
                <p>These are delivered by via SMS to your mobile phone</p>

                <input type="radio" id="pushNotifaictionss" name="Nopushemail"
                  value="everything" onChange={changeHandler}
                />
                <label htmlFor="pushNotifaictionss">Everything</label><br></br>
                     

                <input type="radio" id="pushEmail" name="Nopushemail"
                  value="Email" onChange={changeHandler}
                />
                <label htmlFor="pushEmail">Email</label>   <br></br>  

                <input type="radio" id="NopushEmail" name="Nopushemail"
                  value="NoPushEmail" onChange={changeHandler}
                />
                <label htmlFor="NopushEmail">No Push Email</label>




               </fieldset>     

               <button>Save</button>          
               


               





          </form>
       </div>
   </div>
    
    
  );
}

export default App;
