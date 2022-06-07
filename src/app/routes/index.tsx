import { Navigate, Routes as Switch, BrowserRouter, Route, } from "react-router-dom";

import { Login } from "../pages/login/Login";


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path ="/login" element = {<Login/>} />
                <Route  path= '*' element = {<Navigate to="/login"/>}/> 
         </Switch>
       </BrowserRouter>
    )
};

