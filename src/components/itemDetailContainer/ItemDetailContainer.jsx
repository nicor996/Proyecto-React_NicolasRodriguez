import "./ItemDetailContainer.css"

import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect( ()=>{
    const productSelected = products.find( producto => producto.id === parseInt(id))
    setProduct(productSelected)
  }, [id])

  return (
    <div class="container">
      <div class="row infoNos">
        <div class="d-flex  justify-content-center col-md-4">
          <img src={product.img} alt="" />
        </div>
        <div class="container d-flex align-items-center col-md-4 text-center">
          <div>
            <h2 class="text-center">{product.name}</h2>
            <p class="text-justify">{product.description}</p>
            <h3>$USD {product.price}</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ItemDetailContainer