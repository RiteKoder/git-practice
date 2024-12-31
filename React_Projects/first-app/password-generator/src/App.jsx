import { use } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const paswordGenerator = useCallback(() => {
    

    
  },[length,numberAllowed,characterAllowed,setPassword])

  return (
    <>
      <h1 className="text-4xl text-center ">Password Generator</h1>
      <h2 className="text-4xl text-center py-5 ">{length}</h2>
    </>
  );
}

export default App;
