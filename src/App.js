import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import AddItemComponent from "./Components/AddItem";

function App() {
  const initialProducts = [
    {
      product: "iPhone",
      price: 1200,
      quantity: 0,
    },
    {
      product: "Redmi Note 9",
      price: 120,
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(initialProducts);
  let [totalAmount, setTotalAmount] = useState(0);

  let incrementQuantity = (index) => {
    let temp_product = [...productList];
    let newTotalAmount = totalAmount;
    temp_product[index].quantity++;
    newTotalAmount += temp_product[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(temp_product);
  };

  let decrementQuantity = (index) => {
    let temp_product = [...productList];
    let newTotalAmount = totalAmount;
    if (temp_product[index].quantity > 0) {
      temp_product[index].quantity--;
      newTotalAmount -= temp_product[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(temp_product);
  };

  let resetQuantity = () => {
    let temp_product = [...productList];
    temp_product.map((prod) => (prod.quantity = 0));
    setProductList(temp_product);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let temp_product = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= temp_product[index].price * temp_product[index].quantity;
    temp_product.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(temp_product);
  };

  const AddItem = (name,price) =>{
    let temp_product = [...productList];
    temp_product.push({ product: name , price : price , quantity : 0});
    setProductList(temp_product); 
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
       <AddItemComponent AddItem={AddItem}/>
        <ProductList
          removeItem={removeItem}
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
