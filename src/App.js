import React, {useState} from 'react'
import Carousel from './Carousel';
import "./App.css"
function App() {
  const content = [
    {
      title: "Titolo 1",
      description: "Descrizione 1",
      img:"https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
    },
    {
      title: "Titolo 2",
      description: "Descrizione 2",
      img:"https://cdn.pixabay.com/photo/2013/07/27/05/13/lighthouse-168132_1280.jpg",
    },
    {
      title: "Titolo 3",
      description: "Descrizione 3",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAdbg8yZQlbFq--Do7-92TFNFkYRakdThTEprNld8aer7qvnhTT9YA8aXPr07M0m3pow&usqp=CAU",
    }
  ];
  return (
    <>
    <div className="App">
      <Carousel content={content}></Carousel>
    </div>
    
    </>
  )
}

export default App