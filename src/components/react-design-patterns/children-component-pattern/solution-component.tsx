import { useState } from 'react'

const SolutionComponent = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {children}
    </div>
  );
}

export default SolutionComponent
