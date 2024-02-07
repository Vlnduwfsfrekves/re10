import React from 'react';
function Sticker({image,index}){
    return(
        <img width='100px' height='100px' src={image.image} key={index}/>
    )
}
export default Sticker;