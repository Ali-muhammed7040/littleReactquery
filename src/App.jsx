import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Components/Cards";
import Products from "./Components/Products";

function App() {
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     console.log(response.data); // This will log the array of products
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // error.stack
  //   }
  // };

  // fetchData();

  
  return (
    <>
     <Cards/> 
    {/* <Products/> */}
    </>
    
  );
}

export default App;
