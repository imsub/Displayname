
import { useState } from "react";
export default function Forms(){
const [text,setText] = useState("");
const handler = (event)=>{
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    if(!firstname || !lastname){
        setText("");
    }
    else{
        setText(`Full Name: ${firstname} ${lastname}`);
    }
}
    return(
        <div>
         <form>
                <h1>Full Name Display</h1>
                <label>FirstName:</label>
                <input type="text" id="firstname" name="firstname" required={true}/>
                <br/>
                <label>LastName:</label>
                <input type="text" id="lastname" name="lastname" required={true}/>
                <br/>
                <button type="submit" onClick={handler}>Submit</button>
                <p>{text}</p>
        </form>
        </div>
    )

}