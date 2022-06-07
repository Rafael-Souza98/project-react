
import { useEffect, useState } from 'react';

import './App.css'
import { Login } from './pages/login/Login';
import { Routes } from './routes'
import { UsuarioLogadoProvider } from './shared/contexts';

function App() {
 
  
  return (
    
     <div>
      { /*<UsuarioLogadoProvider >*/}
         <Routes/>
       {/*</UsuarioLogadoProvider>*/}
       
      </div>
 
  )
};

export default App;
