import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';

function App() {
  // fetch data from api, empty array as initial state
  const [data, setData] =  useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setData(response.data))
    .catch(error => console.log("Error fetching data from api"));
},[]);

  return (
    <div>
      <Header/>
      <h1>My React App</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Button label="Click Here" />
      <Footer/>
    </div>
  );
}

export default App;
