import { useState, useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const { amountOfItems } = useContext(CartContext);
    const links = [
        {
            linkTo: "/",
            text: "Home",
            icon: "home",
        },
        {
            linkTo: "/products",
            text: "Products",
            icon: "shoppingmode",
        },
        {
            linkTo: "/about-us",
            text: "About Us",
            icon: "info",
        },
        {
            linkTo: "/contact-us",
            text: "Contact Us",
            icon: "alternate_email",
        },
        {
            linkTo: "/cart",
            text: "Cart",
            icon: "shopping_bag",
        },
    ];

    return (
        <>
             <header
    aria-label="Website banner"
    className={styles.navbar}
>
    <div className={styles.logo}>
        <img
            data-testid="Website logo"
            alt="Website logo"
            role="img"
            aria-label="Website logo"
            src="logo1.avif"
            width="150"
            height="85"
        />
   
         
        
                </div>
                <nav aria-label="Navigation links">
                    {links.map((link) => (
                        <NavLink
                            key={link.linkTo}
                            to={link.linkTo}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </nav>
                <button
                    aria-label="Go to the cart"
                    className={styles.cartButton}
                >
                    <Link to="cart">
                        <span
                            aria-hidden
                            className="material-symbols-rounded"
                        >
                            shopping_bag
                        </span>
                        <span
                            aria-label="Current of items in your cart"
                            className={styles.productsInCart}
                        >
                            {amountOfItems}
                        </span>
                    </Link>
                </button>
            </header>
            {/* Mobile navbar */}
            <header className={styles.mobileNavbar}>
                <>
                    <button
                        aria-label="Show menu"
                        onClick={() =>
                            setShowMobileNavbar((prevState) => !prevState)
                        }
                    >
                        <span className="material-symbols-rounded">menu</span>
                    </button>
                    <h1>
                        <span>BuyNow</span> <span>S</span>hop
                    </h1>
                </>
                <AnimatePresence>
                    {showMobileNavbar && (
                        <motion.nav
                            initial={{ x: "-100%" }}
                            animate={{ x: "0" }}
                            exit={{ x: "-100%" }}
                            transition={{
                                duration: 0.4,
                            }}
                            className={styles.links}
                        >
                            <button
                                aria-label="Hide menu"
                                onClick={() =>
                                    setShowMobileNavbar(
                                        (prevState) => !prevState,
                                    )
                                }
                            >
                                Hide menu{" "}
                                <span className="material-symbols-rounded">
                                    visibility_off
                                </span>
                            </button>
                            {links.map((link) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? styles.mobileLinkActive : ""
                                    }
                                    onClick={() => setShowMobileNavbar(false)}
                                    to={link.linkTo}
                                    key={link.text}
                                >
                                    <span className="material-symbols-rounded">
                                        {link.icon}
                                    </span>
                                    <span>{link.text}</span>
                                </NavLink>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}