import { useEffect, useState } from "react";

// how we can fetch data using useEfffect()
const UseEffectExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then();
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
      console.log(data);
    }
    getData();
  }, []); //this empty array means this call back functio will runs only once
  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((todo) => {
          return (
            <div key={todo.id}>
              <li>Ttile--{todo.title}</li>
              <li>Body---{todo.body}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectExample;
