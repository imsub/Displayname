
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
        setText(`<p>Full Name: ${firstname} ${lastname}</p>`);
    }
}
    return(
        <div>
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
        </form>

        {text}
        </div>
    )

}