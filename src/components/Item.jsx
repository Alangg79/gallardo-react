import React from "react";


const Item =({item}) => {

    return (
          
        <div> 
        <div className="card" style={{width:'20rem', margin:'.5rem'}}></div>
        <div>
            <img class="card-img-top" src={item.img} alt="Card image cap"/>
            
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                    <p>{item.description}</p>            
                    <p>{item.stock}</p>
                    
        </div>
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


