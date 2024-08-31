// Packages
import Carousel from "../../carousel/Carousel";
// Slides
import MainSlide from "./slides/mainSlide/MainSlide";
import CategoriesSlide from "./slides/categoriesSlide/CategoriesSlide";
import SloganSlide from "./slides/sloganSlide/SloganSlide";
// Components
import KeyPoints from "../../keyPoints/KeyPoints";
// Styles
import styles from "./Home.module.css";

export default function Home() {
    const slides = [
        <MainSlide key="main slide" />,
        <SloganSlide key="slogan slide" />,
        <CategoriesSlide key="categories slide" />,
    ];
    return (
        <main
            key="home"
            aria-label="Home page"
            className={styles.home}
        >
            <Carousel slides={slides} />
            <KeyPoints />
        </main>
    );
}
