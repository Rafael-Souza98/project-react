import  React  from "react";
interface IInputLoginProps{
    label: string;
    value: string;
    type?: string;
    

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
};

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) =>{
    return(
        <form>
            <h3> {props.label} </h3>
                    <input type={props.type} value={props.value} ref={ref} placeholder="Insert e-mail" onChange={e => props.onChange(e.target.value)}
                    onKeyDown ={e => e.key === 'Enter'
                    ? props.onPressEnter && props.onPressEnter
                    : undefined}/>
                    
        </form>

    );
});