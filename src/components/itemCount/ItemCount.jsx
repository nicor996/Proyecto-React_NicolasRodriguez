import { useState } from "react"

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial)
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <p>Cantidad: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button>agregar al carrito</button>
    </div>
  )
}

export default Counter