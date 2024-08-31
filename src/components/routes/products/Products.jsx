import { Outlet } from "react-router-dom";
// Components
import FilterCategories from "./filterCategories/FilterCategories";
// Styles
import styles from "./Products.module.css";

export default function Products() {
    return (
        <section
            key="products"
            className={styles.section}
            aria-label="Products section"
        >
            <FilterCategories />
            <div className={styles.divider}></div>
            <Outlet />
        </section>
    );
}
