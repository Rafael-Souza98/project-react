import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "../login/components/ButtonLogin";
import { InputLogin } from "../login/InputLogin";

export const Dashboard = () =>{
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
    const inputPasswordRef = useRef<HTMLInputElement>(null);
  
   const hundleClick = useCallback(() => {
        console.log(email);
        console.log(password);
        if (inputPasswordRef.current != null) {
            inputPasswordRef.current.focus();
            
        }
   }, [email, password])


    return(
        <div>
            <label>
                <InputLogin label="Email"   value={email} onChange ={newValue => setEmail(newValue)}
                onPressEnter={() => inputPasswordRef.current?.focus()}/>

                <InputLogin label="Senha" ref={inputPasswordRef} type= "password" value={password} onChange ={newValue => setPassword(newValue)}/>


               {/* <label>
                    <p> <input type="password" value={password} ref={inputPasswordRef} id="password" placeholder="Insert password" onChange={e => setPassword(e.target.value)}/> </p> 
                </label>*/}
                {/*<input type="button" value="Send" onClick={hundleClick}/> */}
                <ButtonLogin type="button" onClick={hundleClick}>  
                    Cadastrar-se
                </ButtonLogin>  
                
                
                
            </label>
        </div>
   )
};