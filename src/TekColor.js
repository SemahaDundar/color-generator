import React, { useEffect } from "react";
import rgbToHex from './utils';



const TekColor = ({rgb, weight, index, hexColor})=>{
    const[alert, setAlert] = React.useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`
    useEffect(() =>{
        const timeout = setTimeout(() =>{
            setAlert(false)
       
    }, 2000);
    return() => clearTimeout(timeout);
}, [alert]);

return (
    <article className={` renk $ {index > 10 && 'color-light'} `}
        style={{backGroundColor: `rgb(${bcg}) `}}
        onClick={() =>{
setAlert(true)
navigator.clipboard.writeText(hexValue);
        }}
>

<p className="percent-value">{weight}%</p>
<p className="color-value">{hexValue}</p>
{alert && <p className="alert">copied to clipboard</p>}



    </article>
);



}


export default TekColor;