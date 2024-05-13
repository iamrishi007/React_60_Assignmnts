import { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [data, setData] = useState([]);


  async function fetchData() {
    try {
      let res = await fetch('https://fakestoreapi.com/products')
      let finRes = await res.json()
      setData(finRes)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {
    function handleMouseMove(event) {
      console.log('Mouse X:', event.clientX);

    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])



  return (
    <>
    <h1 style={{textAlign:"center"}}>handling side effects in React using the useEffect hook</h1>
      {data.map((elm, index) => (
        <div key={index} id='pro'>
          <img src={elm.image} alt={elm.title} />
          <h2>{elm.price}</h2>
          <p>{elm.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
