import React, { useState } from 'react'

export default function useCustomHook() {
  
  const [count, setCount] = useState(0)

  const increments = () => setCount(count + 1);

  return { count, increments };
  
}


