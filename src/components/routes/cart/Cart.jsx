import React, { useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../contexts/CartContext";
import styles from "./Cart.module.css";
import emptyCartImage from "../../../assets/images/empty.jpg";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseProductAmount,
        decreaseProductAmount,
    } = useContext(CartContext);

    const navigate = useNavigate();

    function getTotal(cartItems) {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].amount) {
                total += cartItems[i].price * cartItems[i].amount;
            } else {
                total += cartItems[i].price;
            }
        }
        return total.toFixed(2);
    }

    const handleProcessOrder = () => {
        toast.success("You have successfully processed your order!"); // Display toast notification
    };

    return (
        <>
            <ToastContainer /> 
            {cartItems.length === 0 ? (
                <section
                    aria-label="Empty cart section"
                    className={styles.emptyCart}
                >
                    <h1>Your cart is empty.</h1>
                    <img
                        src={emptyCartImage}
                        alt="Empty cart"
                    />
                    <Link
                        aria-label="Go to the products section"
                        to="/products"
                    >
                        Browse our products
                    </Link>
                </section>
            ) : (
                <section
                    aria-label="Cart page"
                    className={styles.cart}
                    data-testid="cart-page"
                >
                    <div className={styles.title}>
                        <button
                            aria-label="Go to previous page"
                            onClick={() => navigate(-1)}
                        >
                            <span
                                className="material-symbols-rounded"
                                aria-hidden="true"
                            >
                                arrow_back
                            </span>
                        </button>
                        <h1>Shopping Bag</h1>
                    </div>
                    <section
                        aria-label="Products in the cart"
                        className={styles.itemsList}
                    >
                        <div className={styles.headers}>
                            <h3>Product</h3>
                            <h3>Quantity</h3>
                            <h3>Price</h3>
                        </div>
                        {cartItems.map((item, index) => (
                            <Fragment key={index}>
                                <article
                                    aria-label={`Product: ${item.title}`}
                                    className={styles.item}
                                >
                                    <p aria-label="Product order in the cart">
                                        0{index + 1}
                                    </p>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div
                                        aria-label="Product details"
                                        className={styles.details}
                                    >
                                        <h3 aria-label="Product category">
                                            {item.category
                                                .slice(0, 1)
                                                .toUpperCase() +
                                                item.category.slice(
                                                    1,
                                                    item.category.length,
                                                )}
                                        </h3>
                                        <Link
                                            to={`/products/${item.id}`}
                                            aria-label="Go to the page of this product"
                                        >
                                            <strong aria-label="Product title">
                                                {item.title.length > 50
                                                    ? item.title.slice(0, 50) +
                                                      "..."
                                                    : item.title}
                                            </strong>
                                        </Link>
                                        <span aria-label="Product id">
                                            Id: {item.id}
                                        </span>
                                    </div>
                                    <div className={styles.amount}>
                                        <button
                                            aria-label="Decrease the quantity of this product by 1"
                                            onClick={() => {
                                                decreaseProductAmount(index);
                                            }}
                                        >
                                            <span
                                                className="material-symbols-rounded"
                                                aria-hidden="true"
                                            >
                                                remove
                                            </span>
                                        </button>
                                        <div className={styles.separator}></div>
                                        <span aria-label="Quantity of this product in the cart">
                                            {item.amount}
                                        </span>
                                        <div className={styles.separator}></div>
                                        <button
                                            aria-label="Increase the quantity of this product by 1"
                                            onClick={() => {
                                                increaseProductAmount(index);
                                            }}
                                        >
                                            <span
                                                className="material-symbols-rounded"
                                                aria-hidden="true"
                                            >
                                                add
                                            </span>
                                        </button>
                                    </div>
                                    <strong
                                        aria-label="Unitary price of this product"
                                        className={styles.price}
                                    >
                                        ${item.price}
                                    </strong>
                                    <button
                                        aria-label="Remove this product from the cart"
                                        onClick={() => {
                                            removeFromCart(index);
                                        }}
                                    >
                                        <span
                                            className="material-symbols-rounded"
                                            aria-hidden="true"
                                        >
                                            close
                                        </span>
                                    </button>
                                </article>
                                {index === cartItems.length - 1 ? (
                                    " "
                                ) : (
                                    <div
                                        aria-hidden="true"
                                        className={styles.separator}
                                    ></div>
                                )}
                            </Fragment>
                        ))}
                    </section>
                    <section
                        aria-label="Summary section"
                        className={styles.orderSummary}
                    >
                        <h2>Order Summary</h2>
                        <div className={styles.subTotal}>
                            <p>Subtotal</p>
                            <strong aria-label="Subtotal amount">
                                ${getTotal(cartItems)}
                            </strong>
                        </div>
                        <div className={styles.discount}>
                            <p>Discount</p>
                            <strong aria-label="Discount on your order">
                                $0.00
                            </strong>
                        </div>
                        <div className={styles.shipping}>
                            <p>Shipping</p>
                            <strong aria-label="Shipping cost on your order">
                                $0.00
                            </strong>
                        </div>
                        <div
                            aria-hidden="true"
                            className={styles.separator}
                        ></div>
                        <div className={styles.total}>
                            <strong>Total</strong>
                            <strong aria-label="Total amount">
                                ${getTotal(cartItems)}
                            </strong>
                        </div>
                        <button
                            aria-label="Process the order"
                            className={styles.processOrder}
                            onClick={handleProcessOrder}
                        >
                            Process Order
                        </button>
                        <Link
                            aria-label="Go to products section"
                            to="/products"
                        >
                            Continue Shopping
                        </Link>
                    </section>
                </section>
            )}
        </>
    );
}
