import { createContext, ReactNode, useCallback, useEffect, useState} from "react"


interface IUsuarioLogadoContextData {
    children?:ReactNode;
    nomeDoUsuario?: string;
    logout?: () => void; 
}

export const UsuarioLogadoContext = createContext ({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC <IUsuarioLogadoContextData> = ({children}) => {
    const [name, setName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setName('Rafael')
        }, 2000);
    },[]);


    const handleLogout = useCallback(() => {
        console.log('Logout executou');
    }, []);
    return(
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario: name, children, logout: handleLogout,}}>
        {children}
    </UsuarioLogadoContext.Provider>
    )
}