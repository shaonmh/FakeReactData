
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
      <div className="main-conatiner">
        <div className="card-container">

     {products.map(product => <Product product={product}></Product>
     )}
        </div>
        <div className="cart-container">
          <h2>Cart items</h2>
        </div>


      </div>

    </>
  )
}

export default App
