import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Create a client

function Products() {
  console.log("Rendering Products component");
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      console.log("Starting fetchProducts function");
      return axios
        .get("https://fakestoreapi.com/products/1") // Fetching multiple products
        .then((res) => {
          console.log("Received response from API");
          return res.data;
        });
    },
  });

  // Ensure that the return statements are inside the Products function
  if (isLoading) {
    console.log("Data is loading...");
    return <div>Loading...</div>;
  }
  if (error) {
    console.error("Error occurred:", error.message);
    return <div>Error: {error.message}</div>;
  }

  console.log("Data fetched successfully:", data);

  return (
    <div>
      <div key={data.id} className="product-card">
        <img src={data.image} alt={data.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{data.title}</h2>
          <p className="product-description">{data.description}</p>
          <p className="product-price">${data.price}</p>
          <div className="product-rating"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
