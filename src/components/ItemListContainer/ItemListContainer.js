import React from 'react'
import '../../styles/ItemListContainer.css'

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className='ItemListContainer'>
        {greeting}
    </div>
  )
}

export default ItemListContainer