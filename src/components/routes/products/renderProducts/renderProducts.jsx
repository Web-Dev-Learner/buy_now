// Packages
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// Components
import ProductPreview from "../productPreview/ProductPreview";
import Loader from "../loader/Loader";
// Styles
import styles from "./RenderProducts.module.css";
// Images
import serverDown from "../../../../assets/images/server-down.svg";

function ErrorFetchingProducts({ error }) {
    return (
        <div className={styles.failedToFetchScreen}>
            <h1> Something went wrong... </h1>
            <img
                src={serverDown}
                alt="Server Down Illustration Image"
            />
            <h2>Seems like we are having problems with the connection...</h2>
            <p>Error description: {error}</p>
            <span>Please check if the URL written correctly and is valid.</span>
        </div>
    );
}

export default function RenderProducts() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products with CORS control
    useEffect(() => {
        async function fetchProducts() {
            try {
                setIsLoading(true);
                const url = categoryId
                    ? `https://fakestoreapi.com/products/category/${categoryId}`
                    : "https://fakestoreapi.com/products";
                const response = await fetch(url, { mode: "cors" });
                if (!response.ok) {
                    throw new Error('Error fetching products');
                }
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, [categoryId]);

    if (error) return <ErrorFetchingProducts error={error} />;
    if (isLoading) return <Loader />;

    return (
        <div className={styles.products}>
            {products && products.length === 0 ? (
                <ErrorFetchingProducts
                    error={`We couldn't find the category: "${categoryId}"...`}
                />
            ) : (
                products.map((product) => (
                    <ProductPreview
                        product={product}
                        key={product.id}
                    />
                ))
            )}
        </div>
    );
}

RenderProducts.propTypes = {
    products: PropTypes.array,
};

ErrorFetchingProducts.propTypes = {
    error: PropTypes.string,
};
 