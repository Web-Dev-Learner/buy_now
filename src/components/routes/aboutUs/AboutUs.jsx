import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";
import sampleProduct from "../../../assets/images/shoes.jpg";



export default function AboutUs() {
    return (
        <section
            aria-label="About us section"
            className={styles.aboutUs}
        >
            <h1>About Us</h1>
            <h2 className={styles.subheading}>Your One-Stop Destination for Quality & Convenience</h2>
            <img
                src={sampleProduct}
                alt="Products"
                className={styles.productImage}
            />
            <div className={styles.textGrid}>
                <div className={styles.description}>
                    <h3>Our Story</h3>
                    <p>
                        At JoyfulMart, we&apos;re your ultimate destination for
                        top-quality products that shine bright. Explore a universe
                        of possibilities as you browse through our curated
                        collection of JoyfulMart goods, handpicked to elevate your
                        shopping experience. From fashion to electronics, home decor
                        to gifts, we bring you the stars of the retail world, all in
                        one convenient place. Welcome to a shopping journey where
                        excellence meets convenience—welcome to JoyfulMart Shop.
                    </p>
                </div>
                <div className={styles.featureBox}>
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li>Free Shipping on Orders Over $50</li>
                        <li>24/7 Customer Support</li>
                        <li>Easy Returns & Exchanges</li>
                        <li>Exclusive Deals & Discounts</li>
                        <li>Secure Payment Options</li>
                        <li>High-Quality Products Guaranteed</li>
                    </ul>
                </div>
                <div className={styles.testimonials}>
                    <h3>What Our Customers Say</h3>
                    <blockquote>"JoyfulMart is my go-to store for quality products!"</blockquote>
                    <p>— Satisfied Customer</p>
                    <blockquote>"Fantastic selection and unbeatable prices. I always find what I need!"</blockquote>
                    <p>— Happy Shopper</p>
                </div>
                <div className={styles.additionalContent}>
                    <h3>Join Our Community</h3>
                    <p>Be the first to know about our latest products, exclusive deals, and special events. Follow us on social media!</p>
                    <Link to="/contact-us">
                        <button aria-label="Contact us for more information">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.shopButton}>
                <Link to="/products">
                    <button aria-label="Go to the products section">
                        Shop Now
                    </button>
                </Link>
            </div>
        </section>
    );
}
