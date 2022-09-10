import { useDispatch, useSelector } from "react-redux";

import Button from "../button/button.component";
import { addItemToCart } from "./../../store/cart-dropdown/cart-dropdown.action";
import { selectCartItems } from "./../../store/cart-dropdown/cart-dropdown.selector";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;
  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type={"button"}
        onClick={addCartItemHandler}
        buttonStyle={"inverted"}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
