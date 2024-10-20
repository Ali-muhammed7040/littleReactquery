import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  console.log("Starting fetchProducts function");
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    console.log("Received response from API");

    if (!response.ok) {
      console.error(
        `Response not OK: ${response.status} ${response.statusText}`
      );
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Parsed response JSON data");
    return data;
  } catch (error) {
    console.error("Error in fetchProducts function:", error);
    throw error; // Re-throw the error to be handled by useQuery
  }
};
function Cards() {
  console.log("Rendering Cards component");

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log("useQuery hook state:", { data, error, isLoading });

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
      {data.map((product) => {
        console.log("Rendering product:", product.title);
        return (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                <span>Rating: {product.rating.rate}</span>
                <span> ({product.rating.count} reviews)</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
