export const Buttons = ({val , fn})=>{
    const clicked = ()=>{
        fn(val);
    }
    return (<button onClick={clicked} className="btn btn-info me-2">{val}</button>) 
}  