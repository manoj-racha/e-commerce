import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'
const NewCollections = () => {
  return (
    <div className='new-collections d-flex  flex-column justify-content-center'>
        <h1>NEW COLLECTIONS</h1>
        <hr className='ln '/>
        <div className="collections  row gx-4">
        {new_collections.map((item,i)=>{
           return (                
           <div key={i} className="  col-lg-3 col-md-6 col-sm-12 ">
           <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           </div>)
        })}    
        </div>     
    </div>
  )
}

export default NewCollections
