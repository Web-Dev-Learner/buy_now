import PropTypes from "prop-types";
import styles from "./StarRating.module.css";

export default function StarRating({ rate = 0, fontSize = "2.25rem" }) {
    const rating = Math.trunc(rate);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span
                key={i}
                className={`material-symbols-rounded ${i < rating ? styles.active : styles.inactive}`}
                style={{
                    color: i < rating ? "#7678ed" : "black",
                    opacity: i < rating ? "1" : ".3",
                    fontSize: fontSize,
                }}
            >
                grade
            </span>,
        );
    }

    return <div>{stars}</div>;
}

StarRating.propTypes = {
    rate: PropTypes.number,
    fontSize: PropTypes.string,
};
