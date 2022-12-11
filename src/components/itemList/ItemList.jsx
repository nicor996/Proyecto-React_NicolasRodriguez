import React from "react"
import Item from "../item/Item"

const ItemList = ({ items }) => {
  return (
    <div class="container">
      <div class="row gy-3">
        {items.map((element) => {
            return <Item key={element.id} element={element} />
          })}
      </div>
    </div>
  )
}
export default ItemList
