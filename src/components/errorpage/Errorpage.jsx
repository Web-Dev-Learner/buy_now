// Packages
import { Link, useRouteError } from "react-router-dom";
// Styles
import styles from "./ErrorPage.module.css";
// Images
import errorImage from "../../assets/images/not-found-page.svg";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <section className={styles.errorPage}>
            <h1>
                Seems like the page you are looking for doesn&apos;t exist
            </h1>
            <p>Error description: {error.error.message}</p>
            <img
                src={errorImage}
                alt="This page doesn't exist."
            />
            <Link to="/">Go back to our main page</Link>
        </section>
    );
}
