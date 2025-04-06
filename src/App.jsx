
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Product from './components/Product';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('./faka.json')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setProducts(data)
      
    })
  },[])

  const handleCart = (p) =>{

    const isExist = cart.find(item => item.id == p.id)
    console.log(p);
    // setCart([p])
    if(!isExist){

    setCart(prevCart => [...prevCart, p])
    }else{
      alert('this item is already in Cart')
    }
  }


  return (
    <>
    <div className="main-container">
      <div className="card-container">
        
        {products.map(product => <Product key={product.id} handleCart={handleCart} product={product}></Product>
        )}
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
        <div className="cart-title">
          <h4> Name </h4>
          <h4>Price </h4>
        </div>
          {cart.map((item)=>
            <div className="cart-info" key={item.id}>
              <h4>{item.name.slice(0,10)} </h4>
              <h4> $ {item.price}</h4>
            </div>
          )}
        
      </div>
    </div>

    </>
  )
}

export default App
