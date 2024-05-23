import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval to update the count every second


    const watchTime = setInterval(() => {

      setCount((prevCount) => {

        if (prevCount < 10) {
          return prevCount + 1
        }

        else {
          clearInterval(watchTime)
          return prevCount
        }


      })


    }, 1000);

    // Clean up the interval on component unmount

    function cleanupFunction() {
      clearInterval(watchTime);
    }
    return cleanupFunction;
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
