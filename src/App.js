import "./app.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import axios from "axios";
import Leftbar from "./components/Leftbar";

function App() {
  
  const [money, setMoney] = useState(1000000)
  const [products, setProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState("food")
  const [leftBarStatus, setLeftBarStatus] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(e => {
        if (currentCategory === "all") {
          setProducts(e.data)
        }
        else {
          setProducts(e.data.filter(a => a.type === currentCategory))
        }
      })
      .catch(a=>console.log(a)) 

  }, [currentCategory])
  const addBasket = (e,price,name)=>{
    let amount= e.value; // item sayısı
    console.log(name);
    console.log(price);
    if (amount > 0){

      axios.post("http://localhost:5000/basket",{
        "name":name,
        "price":price,
        "amount":amount
        
      })
      .then(e=>console.log(e))
      .catch(a=>console.log(a));
    }else{
      console.log("amount !> 0")
    }

  }


  return (
    <div className="App">
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} money={money} />
      <Leftbar setLeftBarStatus={setLeftBarStatus} leftBarStatus={leftBarStatus}/>
      <div className="products">
        <div className="tabs">
          {products.map((value, key) => (
            <Product addBasket={addBasket} products={products} value={value} key={key} />

          ))}


        </div>
      </div>
    </div>
  );
}

export default App;
