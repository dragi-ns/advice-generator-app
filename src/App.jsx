import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <div className="text-3xl font-bold underline">{count}</div>;
}

export default App;
