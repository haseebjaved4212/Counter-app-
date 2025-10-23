import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
