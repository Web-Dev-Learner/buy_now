// Packages
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
// Components
import Loader from "../loader/Loader";
import StarRating from "../starRating/StarRating";
import Notification from "../../../notification/Notification";
import ProductNotFound from "./productNotFoundl/ProductNotFound";
// Contexts
import CartContext from "../../../../contexts/CartContext";
// Styles
import styles from "./SingleProduct.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
    const { productId } = useParams();
    const { addItemToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [amountOfProducts, setAmountOfProducts] = useState(1);

    const notification = () => {
        toast.success(
            <Notification
                product={product}
                amount={amountOfProducts}
            />,
            {
                style: {
                    backgroundColor: "#7678ed",
                },
            },
        );
    };

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`) // Updated to use dummyjson API
            .then((response) => response.json())
            .then((result) => setProduct(result))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [productId]);

    function handleFormSubmit(e) {
        e.preventDefault();
        addItemToCart(product, amountOfProducts);
        setAmountOfProducts(1);
    }

    if (error) {
        return <ProductNotFound />;
    }

    if (isLoading) return <Loader />;

    return (
        <main
            aria-label={`Product: ${product.title}`}
            className={styles.singleProduct}
        >
            <ToastContainer />
            <h1 className={styles.mobileTitle}>{product.title}</h1>
            <div className={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <section className={styles.description}>
                <h1>{product.title}</h1>
                <h3>
                    {product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                </h3>
               

                <div
    aria-label={`This product has a rating of ${product.rating.rate} out of ${product.rating.count} reviews.`}
    title={`This product has a rating of ${product.rating.rate} out of ${product.rating.count} reviews.`}
    className={styles.rating}
>
    <StarRating
        rate={product.rating.rate}
        fontSize="3rem"
    />
   
</div>



                <p>{product.description}</p>
                <p className={styles.price}>${product.price}</p>
                <form
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                        notification();
                    }}
                    className={styles.amount}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setAmountOfProducts((prevAmount) => Math.max(prevAmount - 1, 1)); // Ensure minimum is 1
                        }}
                        className={styles.remove}
                    >
                        <span className="material-symbols-rounded">remove</span>
                    </button>
                    <input
                        onChange={(e) => setAmountOfProducts(Math.max(1, e.target.value))} // Ensure minimum is 1
                        value={amountOfProducts}
                        max="30"
                        min="1"
                        type="number"
                        name="amount"
                        id="amount"
                        required
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setAmountOfProducts((prevAmount) => Math.min(prevAmount + 1, 30)); // Ensure maximum is 30
                        }}
                        className={styles.add}
                    >
                        <span className="material-symbols-rounded">add</span>
                    </button>
                    <button
                        type="submit"
                        className={styles.addToCart}
                    >
                        <span className="material-symbols-rounded">
                            add_shopping_cart
                        </span>
                        Add to cart
                    </button>
                </form>
            </section>
        </main>
    );
}

