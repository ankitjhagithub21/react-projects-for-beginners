import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex === -1) {
      const updatedProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, updatedProduct]);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
    alert("Product added to cart")
  };

  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-lg-8 col-md-6">
            <h2 className='text-center mb-3'>Products</h2>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
            {
                products.map((product)=>{
                    return(
                        <div className='card border-0 product ' key={product.id}>
                            <img src={product.image} alt={product.title} className='card-img-top' />
                            <div className="card-body rounded shadow bg-light text-center">
                            <p className='card-text fs-5'>{product.category}</p>
                            <p className='card-text fs-5 fw-bold'>${product.price}</p>
                               
                              <button className='btn btn-success' onClick={()=>addToCart(product)}>ADD TO CART</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <h2 className='text-center mb-3'>Cart</h2>
            <p className='mb-3 fs-5 text-center'>Total Price:${total}</p>
            <div className="d-flex flex-column  gap-3" >
            {
                cart.map((product)=>{
                    return (
                        <div className='d-flex justify-content-around align-items-center  bg-light shadow rounded p-2' key={product.id}>
                            <div className="d-flex flex-column gap-2 text-center">
                            <img src={product.image} alt={product.title} width={100}
                            />
                            <strong>Price:${product.price*product.quantity}</strong>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                            <button className='btn btn-primary' onClick={()=>decrementQuantity(product.id)}>-</button>
                            <span className='fs-5'>{product.quantity}</span>
                            <button className='btn btn-primary' onClick={()=>incrementQuantity(product.id)}>+</button>
                            </div>
                            <button className='btn btn-danger' onClick={()=>removeProduct(product.id)}>X</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
