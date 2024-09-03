import styles from "./Footer.module.css";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                Shrinedhi M R
                <a
                    href="https://github.com/Web-Dev-Learner?tab=overview&from=2024-08-01&to=2024-08-28"
                    target="_blank"
                    aria-label="Go to the author's GitHub account"
                >
                    <i className="fab fa-github"></i>
                </a>
                Web-Dev-Learner{" "}
            </p>
        </div>
    );
}
