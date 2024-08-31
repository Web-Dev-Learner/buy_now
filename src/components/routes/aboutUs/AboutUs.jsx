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
            <div className={styles.right}>
                <img
                    src={sampleProduct}
                    alt="Products"
                />
                <p>
                    At JoyfulMart, we&apos;re your ultimate destination for
                    top-quality products that shine bright. Explore a universe
                    of possibilities as you browse through our curated
                    collection of stellar goods, handpicked to elevate your
                    shopping experience. From fashion to electronics, home decor
                    to gifts, we bring you the stars of the retail world, all in
                    one convenient place. Welcome to a shopping journey where
                    excellence meets convenience—welcome to Stellar Shop.
                </p>
                <Link to="/products">
                    <button aria-label="Go to the products section">
                        Shop Now
                    </button>
                </Link>
            </div>
        </section>
    );
}
