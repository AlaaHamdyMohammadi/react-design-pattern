import { useState } from 'react'
import ExpensiveComponent from './expensive-component'

const BadComponent = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ExpensiveComponent/>
    </div>
  )
}

export default BadComponent
