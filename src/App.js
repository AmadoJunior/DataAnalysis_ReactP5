import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  //State
  const [state, setState] = useState("");

  //Effects
  useEffect(() => {

    const testRequestOptions = {
      method: "GET",
      //headers:{},
      //body: JSON.stringify(data)
    };

    fetch("/api/test")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data.message);
      setState(data.message);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  //JSX
  return (
    <div className="App">
      <h1>{state}</h1>
    </div>
  );
}

export default App;
