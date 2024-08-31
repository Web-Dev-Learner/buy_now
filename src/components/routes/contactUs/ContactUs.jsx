// Styles
import styles from "./ContactUs.module.css";

export default function ContactUs() {
    const contactForms = [
        {
            title: "Twitter",
            icon: "fa-brands fa-square-x-twitter",
            description: "Reach us through X.",
            link: "JoyfulMart on X",
        },
        {
            title: "Email",
            icon: "fa-solid fa-envelope",
            description: "Contact us through email.",
            link: "JoyfulMart's Email",
        },
        {
            title: "Phone",
            icon: "fa-solid fa-square-phone",
            description: "Give us a call.",
            link: "JoyfulMart's phone: 123-456-7890",
        },
        {
            title: "WhatsApp",
            icon: "fa-brands fa-square-whatsapp",
            description: "Send us a message through WhatsApp.",
            link: "JoyfulMart's phone: 123-456-7890",
        },
        {
            title: "Instagram",
            icon: "fa-brands fa-square-instagram",
            description: "Follow us on Instagram.",
            link: "JoyfulMart's Instagram page",
        },
        {
            title: "Facebook",
            icon: "fa-brands fa-square-facebook",
            description: "Follow us on Facebook.",
            link: "JoyfulMart's Facebook page",
        },
    ];

    return (
        <section
            className={styles.contactUs}
            aria-label="Contact us section"
        >
            <div className={styles.banner}>
                <h1>Contact Us</h1>
            </div>
            <h3>
                We would love to hear from you{" "}
                <span className="material-symbols-rounded">favorite</span>
            </h3>
            <div className={styles.contactForms}>
                {contactForms.map((obj) => (
                    <article
                        className={styles.card}
                        key={obj.title}
                    >
                        <span>
                            <i className={obj.icon}></i>
                        </span>
                        <h2>{obj.title}</h2>
                        <p>{obj.description}</p>
                        <a href="#">
                            <strong>{obj.link}</strong>
                        </a>
                    </article>
                ))}
            </div>
            <div className={styles.spacer}></div>
            <span>Get In Touch.</span>
        </section>
    );
}
