import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
    try {
      {
        let res = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products"
        })
        setPosts(res?.data)
        console.log(posts);
        setLoading(false)
      }

    } catch (error) {
      {
        setError(true)
        setLoading(false)

      }
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  let divStyle = {
    padding: "10px",
    margin:"10px"
  }
  return (
    <div style={divStyle}>
      <h1>List of Posts</h1>

      {posts?.map((elm) => (
        <Post {...elm} key={elm.id} />
      ))}
    </div>
  );
}

export default Posts;