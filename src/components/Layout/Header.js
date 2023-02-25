import React from "react";

import styles from "./Header.module.css";
import bgImage from "../../assets/img/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={bgImage} alt='A table full od delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
