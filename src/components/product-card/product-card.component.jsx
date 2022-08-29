import { useContext } from "react";

import Button from "../button/button.component";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartDropDownContext);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button type={"button"} onClick={() => addItemToCart(product)} buttonStyle={"inverted"}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;