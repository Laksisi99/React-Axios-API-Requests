import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const[data,setData] = useState([])
  const[title,setTitle] = useState('')
  const[body,setBody] = useState('')

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log("Getting from ::::",res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])
  const postData = (e) => {
    e.preventDefault();
    Axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    }).then(res => console.log('Posting data', res))
    .catch(err => console.log(err))
  }

  const arr = data.map((data, index) => {
    return(
      <tr>
        <td style={{border: '1px solid black'}}>{data.id}</td>
        <td style={{border: '1px solid black'}}>{data.title}</td>
        <td style={{border: '1px solid black'}}>{data.body}</td>
      </tr>
    )
  })

  return (
    <div className='App'>

     <h1>Lets Use Axios with React js</h1>

     <form>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <hr />
      <label>Body</label>
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
      <hr />
      <button onClick={postData}>POST</button>
     </form>

    <table style={{border: '1px solid black'}}>

      <tr>
        <th style={{border: '1px solid black'}}>ID</th>
        <th style={{border: '1px solid black'}}>Title</th>
        <th style={{border: '1px solid black'}}>Body</th>
      </tr>

      {arr}
      
      
    </table>


    </div>
  );
}

export default App;
