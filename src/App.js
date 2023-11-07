import React, { useState } from "react";
import './App.css';


function App() {
  const [product, setProduct] = useState([
    {
      name: "Nước cam",
      id: 1,
      price: "15",
      img: 'https://tse2.mm.bing.net/th?id=OIP.UuOmK34er60ntRMiXOsLLAHaFn&pid=Api&P=0&h=180',
      quantity: 0,
    },
    {
      name: "Nước coca",
      id: 2,
      price: "10",
      img: 'https://tse2.mm.bing.net/th?id=OIP.UrNOpzsLZ2Uw-nOtI7wmqQHaHa&pid=Api&P=0&h=180',
      quantity: 0,
    },
    {
      name: "Nước mirinda",
      id: 3,
      price: "20",
      img: 'https://tse2.mm.bing.net/th?id=OIP.Lwpfz54PKlyaiCjOXue9lQHaEK&pid=Api&P=0&h=180',
      quantity: 0,
    },
    {
      name: "Nước c2",
      id: 4,
      price: "15",
      img: 'https://tse1.mm.bing.net/th?id=OIP.c4epzGYgz_3lhW-QC_erdgHaET&pid=Api&P=0&h=180',
      quantity: 0,
    },
    {
      name: "Nước c2",
      id: 5,
      price: "15",
      img: 'https://tse3.mm.bing.net/th?id=OIP.nlGd2ol5438b4jVQGpn2SwHaET&pid=Api&P=0&h=180',
      quantity: 0,
    },
  ]);

  const [obj, setObj] = useState({});
  //render html
  const Add = () => {
    setProduct([...product, obj])
  }
  //giam so luong
  const Pre = (i) => {
    let arr = [...product];
    if (arr[i].quantity != 0) {
      arr[i].quantity = arr[i].quantity - 1
    }
    setProduct(arr)
  }
  //tang so luong
  const Next = (i) => {
    let arr = [...product];
    arr[i].quantity = arr[i].quantity + 1
    setProduct(arr)
  }
  //them gio hang
  let cart = product.filter((e) => {
    return e.quantity != 0
  })
  // tog tien
  let sumMoney = cart.reduce((a, b) => {
    return a + b.price * b.quantity
  }, 0)

  return (
    <div className="App">
      <div className='header'>
        <p>To Spend <span>{1000000000-sumMoney}</span> You have a lot of money</p>
      </div>
      <div className='row'>
        {product.map((e, i) => {
          return (
            <div className='col-3 product'>
              <img src={e.img} className='img' />
              <div className='title'>
                <p>{e.name}</p>
                <p>${e.price}</p>
              </div>
              <div className='button'>
                <button className='pre' onClick={() => Pre(i)} >Pre</button>
                <span>{e.quantity}</span>
                <button className='next' onClick={() => Next(i)}>Add</button>
              </div>
            </div>
          )
        })
        }
      </div>
      <div className='cart'>
        <h3>Giỏ hàng của bạn</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map((item, index) => {
          return <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity*item.price}</td>
          </tr>
          })}
        </table>

        <div className="reset">
          <p>Total Price: <span>{sumMoney}</span></p>
          <button className="btnReset">Reset Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
