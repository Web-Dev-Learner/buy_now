import styles from "./KeyPoints.module.css";

export default function KeyPoints() {
    const keyPoints = [
        {
            title: "Vast Product Selection",
            description:
                "From cutting-edge gadgets to the latest fashion trends, JoyfulMart offers an extensive collection of products to suit every taste.",
            googleIcon: "inventory",
        },
        {
            title: "Top-Notch Security",
            description:
                "Shop worry-free with JoyfulMart’s secure payment gateway, ensuring your transactions are safe and protected.",
            googleIcon: "verified_user",
        },
        {
            title: "Exceptional Customer Support",
            description:
                "Our dedicated support team is always ready to assist, ensuring you have a smooth and satisfying shopping experience.",
            googleIcon: "headset_mic",
        },
        {
            title: "Tailored Shopping Experience",
            description:
                "Enjoy a personalized shopping journey with recommendations that match your style and preferences, thanks to our smart algorithms.",
            googleIcon: "thumb_up",
        },
        {
            title: "Engaging Social Presence",
            description:
                "Stay connected with JoyfulMart on social media for the latest updates, exclusive deals, and community engagement.",
            googleIcon: "chat",
        },
        {
            title: "Swift Delivery Service",
            description:
                "Experience the convenience of fast and reliable shipping, with real-time tracking and prompt delivery of your orders.",
            googleIcon: "flight_takeoff",
        },
    ];
    
    

    return (
        <div className={styles.keyPoints}>
            <p>
                <span>JoyfulMart</span>  is a an e-commerce
                website that aims to provide customers with a seamless shopping
                experience for a variety of products.{" "}
            </p>
            <div className={styles.grid}>
                {keyPoints.map((point, index) => (
                    <div
                        className={styles.point}
                        key={index}
                    >
                        <span className="material-symbols-rounded">
                            {point.googleIcon}
                        </span>
                        <h3>{point.title}</h3>
                        <div className={styles.hiddenDescription}>
                            <p>{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}