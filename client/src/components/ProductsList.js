import "../styles/Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ducks/productsDuck";
import { setSelectedProduct } from "../redux/ducks/selectedProductDuck";
import { showBugsList } from "../redux/ducks/showComponentDuck";
const Products = () => {
  //
  const dispatch = useDispatch();

  //useEffect() with empty dependency array to
  //make useEffect as if componentDidMount() -- i.e., when the component mounts
  //Check out https://youtu.be/3Wb9l18KoxI for more details on useEffect()
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);
  const productsState = useSelector((state) => state.products);
  //
  const productClickHandler = (event) => {
    dispatch(setSelectedProduct(event.target.innerText));
    dispatch(showBugsList());
  };

  return (
    <div className="products-list">
      {productsState.loading === true && <h2>LOADING PRODUCTS........</h2>}

      {productsState.loading === false && (
        <div className="products">
          <h2>Products:</h2>
          {productsState.products.map((product) => (
            <p key={product._id} onClick={productClickHandler}>
              {product.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
