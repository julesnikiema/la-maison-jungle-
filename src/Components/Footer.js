import { useState } from "react";
import '../Styles/Footer.css'


function Footer(){

    const[inputValue, setInputValue]=useState('')

    function handleInput(e) {

        setInputValue(e.target.value)
        
    }
    function handleBlur(){

        if(!inputValue.includes('@')){
            alert("il n'y a pas d'@ dans votre email, ceci n'est pas une adresse valide " )
        }
    }
        return(

            <footer className='lmj-footer'>
          <div className="lmj-footer-elm" >Pour les passiones des plantes</div>
          <div className="lmj-footer-elm" > laissez nouas votre mail : </div>

          <input 

            placeholder="inserez votre mail"
            onChange={handleInput}
            value={inputValue}
            onBlur={handleBlur}


          />



            </footer>

        )

    }


export default Footer