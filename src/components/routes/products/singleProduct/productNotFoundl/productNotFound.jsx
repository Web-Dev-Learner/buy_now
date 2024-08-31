import styles from "./ProductNotFound.module.css";
import { Link } from "react-router-dom";
import productNotFound from "../../../../../assets/images/product-not-found.svg";

export default function ProductNotFound() {
    return (
        <div className={styles.productNotFound}>
            <h1>
                Sorry, we couldn&apos;t find the product you were looking for...
            </h1>
            <img
                src={productNotFound}
                alt="Product not found"
            />
            <Link to="/products">Go back to products</Link>
        </div>
    );
}
