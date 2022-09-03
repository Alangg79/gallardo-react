import React from "react";

const Item =({item}) => {
    return (
    <div> 
        <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    </div>


    )
}

export default Item


