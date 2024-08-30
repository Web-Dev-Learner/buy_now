// Packages
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./Carousel.module.css";


// Carousel component that takes 'slides' as a prop
export default function Carousel({ slides }) {
    // State for tracking the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // State for controlling whether auto-slide is enabled
    const [autoSlide, setAutoSlide] = useState(true);

    // Function to go to the previous slide
    const previousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to a specific slide based on its index
    const goToSlideNumber = (index) => {
        setCurrentIndex(index);
    };

    // useEffect hook to handle auto-slide functionality
    useEffect(() => {
        if (autoSlide) {
            // Set interval for auto-sliding every 5 seconds
            const interval = setInterval(() => {
                nextSlide(); // Move to the next slide automatically
            }, 5000);

            // Cleanup interval when the component unmounts or autoSlide changes
            return () => clearInterval(interval);
        }
    }, [autoSlide]);

    return (
        // Main container for the Carousel component
        <section className={styles.carousel} aria-label="Carousel slider">
            {/* Button to go to the previous slide */}
            <button
                aria-label="Go to previous slide"
                onClick={previousSlide}
                className={styles.previous}
            >
                <span aria-hidden className="material-symbols-rounded">
                    arrow_back
                </span>
            </button>

            {/* Container for the slides */}
            <ul
                onMouseEnter={() => setAutoSlide(false)} // Pause auto-slide on mouse enter
                onMouseLeave={() => setAutoSlide(true)} // Resume auto-slide on mouse leave
                className={styles.slidesContainer}
            >
                {/* Render each slide */}
                {slides.map((slide, index) =>
                    slide.props ? (
                        // If slide is a React element
                        <li
                            aria-label={`Slide number ${index + 1}`}
                            aria-hidden={currentIndex !== index}
                            className={`${styles.slide} ${currentIndex === index ? styles.active : ""}`}
                            key={index}
                            style={{
                                translate: `${-100 * currentIndex}%`, // Translate slides based on currentIndex
                            }}
                        >
                            {slide}
                        </li>
                    ) : (
                        // If slide is an image
                        <img
                            aria-hidden={currentIndex !== index}
                            tabIndex={`${currentIndex !== index && "-1"}`}
                            style={{
                                translate: `${-100 * currentIndex}%`, // Translate slides based on currentIndex
                            }}
                            src={slide.url}
                            alt={slide.description}
                            key={index}
                        />
                    )
                )}
            </ul>

            {/* Button to go to the next slide */}
            <button
                aria-label="Go to next slide"
                onClick={nextSlide}
                className={styles.next}
            >
                <span aria-hidden className="material-symbols-rounded">
                    arrow_forward
                </span>
            </button>

            {/* Navigation dots for direct slide access */}
            <div className={styles.navigation}>
                {slides.map((_, index) => (
                    <button
                        aria-label={`Go to slide number ${index + 1}`}
                        onClick={() => goToSlideNumber(index)}
                        key={index}
                    >
                        <span aria-hidden className="material-symbols-rounded">
                            {currentIndex === index
                                ? "radio_button_checked"
                                : "radio_button_unchecked"}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}

// Define prop types for the Carousel component
Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                url: PropTypes.string, // URL of the slide image
                description: PropTypes.string, // Description of the slide image
            }),
            PropTypes.elementType, // Slide can also be a React element
        ])
    ),
};