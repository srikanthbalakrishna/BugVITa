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
  const productsState = useSelector((state) => state.products);
  console.log(productsState.loading);

  //
  return (
    <div className="products-list">
      {productsState.loading === true && <h2>LOADING........</h2>}

      {productsState.loading === false &&
      (
        <div className="products">
          <h2>Products:</h2>
          {   productsState.products.map( product  => <p key={product._id}> {product.name}</p> )   }
        </div>
      )
      }
    </div>
  );
};

export default Products;
