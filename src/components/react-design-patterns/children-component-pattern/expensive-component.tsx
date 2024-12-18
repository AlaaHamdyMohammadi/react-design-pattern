import React from 'react'

const ExpensiveComponent = () => {
    let startTime = performance.now();
    while(performance.now() - startTime < 1000) {}
  return (
    <div>
      <h1>Expensive Component</h1>
    </div>
  )
}

export default ExpensiveComponent
