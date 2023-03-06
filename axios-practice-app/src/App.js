import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const[data,setData] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log("Getting from ::::",res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data, index) => {
    return(
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    )
  })

  return (
    <div className='App'>

     <h1>Lets Use Axios with React js</h1>

    <table>

      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>

      {arr}
      
      
    </table>


    </div>
  );
}

export default App;
