
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
    <div className="main-container">
      <div className="card-container">
        
        {products.map(product => <Product product={product}></Product>
        )}
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
        <div className="cart-title">
          <h4>Name</h4>
          <h4>Price</h4>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
