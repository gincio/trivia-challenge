import LogoImage from "./Logo"
import styles from './Header.module.css'

const Header = () => (
    <div className={styles.header}>
        <h1>Welcome to the</h1>
        <LogoImage />
    </div>
)

export default Header