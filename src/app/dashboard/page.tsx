import React, { useEffect, useState } from 'react'

function Dashboard() {
  const test = 1;
  const [count, setCount] = useState(0)

  useEffect(() => {
      setCount(count +1)
  }, [])
  return (
    <div>page</div>
  )
}

export default Dashboard