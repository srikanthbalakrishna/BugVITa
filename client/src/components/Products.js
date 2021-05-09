import "../styles/Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ducks/productsDuck";

const Products = () => {
  //
  const dispatch = useDispatch();

  //useEffect() with empty dependency array to
  //make useEffect as if componentDidMount() -- i.e., when the component mounts
  //Check out https://youtu.be/3Wb9l18KoxI for more details on useEffect()
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productsList = useSelector((state) => state.products.products);
  console.log(productsList);
  //
  return (
    <div className="products-list">
      {/*For now, let it be a hardcoded list,just to give us an idea */}

      <h2>Products:</h2>
      {productsList.map((product) => (
        <p key={product._id}> {product.name}</p>
      ))}
    </div>
  );
};

export default Products;
