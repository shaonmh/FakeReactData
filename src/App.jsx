
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Product from './components/Product';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('./faka.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProducts(data)
      
    })
  },[])

  return (
    <>
     <h1>Hello world</h1>
     {products.map(product => <Product product={product}></Product>
     )}
    </>
  )
}

export default App
