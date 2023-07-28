import Logo from "../logo/Logo";
import styles from "./navigation.module.css";

const Navigation = () => {
    return (
        <header>
            <div className={styles.navigation__img}>
                <Logo />
            </div>
        </header>
    );
};

export default Navigation;
