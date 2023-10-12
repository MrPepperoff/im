
import './App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import PageListProducts from './pages/PageListProducts';
import PageProduct from './pages/PageProduct';


function App() {

  let [state, setState] = useState({
    products : [
                {
                    id:1,
                    title: "Amazon Cloud Cam Security Camera",
                    img: ["product5.webp", "product6.webp"],
                    price: 1000,
                    old_price: 1100,
                    reviews: {count: 123, average_value:4},
                    maxCount: 100,
                    characteristics: [
                      {id: 1, value: "зеленый", name: "Color"},
                      {id: 2, value: "черный", name: "Color"}
                    ]
                },
                {
                    id:2,
                    title: "Lorem ipsum dolor, sit amet adipisi elit.",
                    img: ["product5.webp", "product6.webp"],
                    price: 2000,
                    old_price: null,
                    reviews: {count: 100, average_value:3},
                    maxCount: 100,
                    characteristics: [
                      {id: 1, value: "зеленый", name: "Color"},
                      {id: 2, value: "черный", name: "Color"}
                    ]
                },
                {
                    id:3,
                    title: "Taboriosam asnda et itaque expcabo.",
                    img: ["product5.webp", "product6.webp"],
                    price: 3000,
                    old_price: 3400,
                    reviews: {count: 999, average_value:5},
                    maxCount: 100,
                    characteristics: [
                      {id: 1, value: "зеленый", name: "Color"},
                      {id: 2, value: "черный", name: "Color"}
                    ]
                },
            ],
    cart: 
        [
            {
              id_product: 1,
              count: 4,
              id_characteristic: 1,
            },
            {
                id_product: 2,
                count: 2,
                id_characteristic: 1,
            }
        ]
  }

      
  );


  function onAddCountProduct(index){

    state.cart[index].count++;

    let newState = Object.assign(state);
    console.log(newState);

    setState(newState);
    //setCart(cart.slice(cart));
  }

  return (
    <div className="App">
      <Routes>

        <Route
          path="/"
          element={<PageListProducts state={state} onAddCountProduct={onAddCountProduct}/>}
        />
        <Route
          path="page/:id"
          element={<PageProduct />}
        />

      </Routes>
      
      

    </div>
  );
}

export default App;
