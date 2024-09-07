

// Packages
import { Link } from "react-router-dom";
// Images
import jewelery from "../../../../../assets/images/jewelery.jpg";
import electronics from "../../../../../assets/images/electro.jpg";
import menClothing from "../../../../../assets/images/men-clothing.jpg";
import womenClothing from "../../../../../assets/images/women-clothing.jpg";
// Styles
import styles from "./CategoriesSlide.module.css";

export default function CategoriesSlide() {
    const categories = [
        {
            imageUrl: jewelery,
            description: "Jewelery",
            link: "jewelery",
        },
        {
            imageUrl: electronics,
            description: "Electronics",
            link: "electronics",
        },
        
        {
            imageUrl: womenClothing,
            description: "Women Clothing",
            link: "women's clothing",
        },
        {
            imageUrl: menClothing,
            description: "Men Clothing",
            link: "men's clothing",
        },
    ];

    return (
        <div className={styles.categoriesSlide}>
            <h2>Shop By Category</h2>
            {categories.map((category, index) => (
                <div
                    key={index}
                    style={{
                        backgroundImage: `linear-gradient(#00000055, #00000055),url(${category.imageUrl})`,
                    }}
                >
                    <Link to={`products/category/${category.link}`}>
                        <button
                            aria-label={`Go to the ${category.description} category.`}
                        >
                            {category.description}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

/*[
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ]*/

    /*[
  {
    "slug": "beauty",
    "name": "Beauty",
    "url": "https://dummyjson.com/products/category/beauty"
  },
  {
    "slug": "fragrances",
    "name": "Fragrances",
    "url": "https://dummyjson.com/products/category/fragrances"
  },
  {
    "slug": "furniture",
    "name": "Furniture",
    "url": "https://dummyjson.com/products/category/furniture"
  },
  {
    "slug": "groceries",
    "name": "Groceries",
    "url": "https://dummyjson.com/products/category/groceries"
  },
  {
    "slug": "home-decoration",
    "name": "Home Decoration",
    "url": "https://dummyjson.com/products/category/home-decoration"
  },
  {
    "slug": "kitchen-accessories",
    "name": "Kitchen Accessories",
    "url": "https://dummyjson.com/products/category/kitchen-accessories"
  },
  {
    "slug": "laptops",
    "name": "Laptops",
    "url": "https://dummyjson.com/products/category/laptops"
  },
  {
    "slug": "mens-shirts",
    "name": "Mens Shirts",
    "url": "https://dummyjson.com/products/category/mens-shirts"
  },
  {
    "slug": "mens-shoes",
    "name": "Mens Shoes",
    "url": "https://dummyjson.com/products/category/mens-shoes"
  },
  {
    "slug": "mens-watches",
    "name": "Mens Watches",
    "url": "https://dummyjson.com/products/category/mens-watches"
  },
  {
    "slug": "mobile-accessories",
    "name": "Mobile Accessories",
    "url": "https://dummyjson.com/products/category/mobile-accessories"
  },
  {
    "slug": "motorcycle",
    "name": "Motorcycle",
    "url": "https://dummyjson.com/products/category/motorcycle"
  },
  {
    "slug": "skin-care",
    "name": "Skin Care",
    "url": "https://dummyjson.com/products/category/skin-care"
  },
  {
    "slug": "smartphones",
    "name": "Smartphones",
    "url": "https://dummyjson.com/products/category/smartphones"
  },
  {
    "slug": "sports-accessories",
    "name": "Sports Accessories",
    "url": "https://dummyjson.com/products/category/sports-accessories"
  },
  {
    "slug": "sunglasses",
    "name": "Sunglasses",
    "url": "https://dummyjson.com/products/category/sunglasses"
  },
  {
    "slug": "tablets",
    "name": "Tablets",
    "url": "https://dummyjson.com/products/category/tablets"
  },
  {
    "slug": "tops",
    "name": "Tops",
    "url": "https://dummyjson.com/products/category/tops"
  },
  {
    "slug": "vehicle",
    "name": "Vehicle",
    "url": "https://dummyjson.com/products/category/vehicle"
  },
  {
    "slug": "womens-bags",
    "name": "Womens Bags",
    "url": "https://dummyjson.com/products/category/womens-bags"
  },
  {
    "slug": "womens-dresses",
    "name": "Womens Dresses",
    "url": "https://dummyjson.com/products/category/womens-dresses"
  },
  {
    "slug": "womens-jewellery",
    "name": "Womens Jewellery",
    "url": "https://dummyjson.com/products/category/womens-jewellery"
  },
  {
    "slug": "womens-shoes",
    "name": "Womens Shoes",
    "url": "https://dummyjson.com/products/category/womens-shoes"
  },
  {
    "slug": "womens-watches",
    "name": "Womens Watches",
    "url": "https://dummyjson.com/products/category/womens-watches"
  }
] */