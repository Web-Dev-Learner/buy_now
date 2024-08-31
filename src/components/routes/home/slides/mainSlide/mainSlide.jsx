import React from 'react';
import styles from './MainSlide.module.css';


export default function MainSlide() {
    return (
        <div className={styles.mainSlide}>
 <h1>
  <span style={{ color: "white", fontSize: "3rem" }}>Welcome to </span>
  <span style={{ color: "black", fontWeight: "bold", fontSize: "3rem" }}>Joyful</span>
  <span style={{ color: "red", fontSize: "3rem" }}>Mart</span>
</h1>

        </div>
    );
}
