import React from "react";


const Item =({item}) => {

    return (
          
        <div>
        <h3>{item.name}</h3>
        <img style={{widht:"150px"}} src={item.img} alt= 'img prod' />
        <div style ={{widht: "450px"}}>{item.description}</div>
        <div>{item.price}</div>
        <div>{item.stock}</div>
      </div>
        


        

	);    
		// <div className='item--card'>
		// 	<h3>{item.name}</h3>
		// 	<img src={item.img} alt={item.name} />
		// 	<div>$ {item.price}</div>
		// 	<div className='item--card--description'>
		// 		{item.description}
		// 	</div>
		// 	<ItemListContainer stock={item.stock} initial={1} />

        //     <button className='btn btn-primary'>Ver más</button>
		// </div>






    //
    



    // // )
}

export default Item


