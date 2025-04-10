import { useState, useEffect } from 'react';

export default function App() {
  const [contador, setContador] = useState(null);

  useEffect(() => {
    console.log(`Contador actualizado: ${contador}`);
  },[contador]);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
