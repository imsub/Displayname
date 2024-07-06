
import { useState } from "react";
export default function Forms(){
const [text,setText] = useState("");
const handler = (event)=>{
    event.preventDefault();
    debugger; 
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    if(!firstname || !lastname)
       setText("");
    else
    setText(`Full Name: ${firstname} ${lastname}`);
}
    return(
        <form>
            <div>
                <label>FirstName:</label>
                <input type="text" id="firstname" name="firstname" required={true}/>
            </div>
            <div>
                <label>LastName:</label>
                <input type="text" id="lastname" name="lastname" required={true}/>
            </div>
            <div>
                <button type="submit" onClick={handler}>Submit</button>
            </div>
            <br/>
            <p id="text">{text}</p>
        </form>
    )

}