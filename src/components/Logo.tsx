import logoImage from '../assets/logo.png'
import styles from './Logo.module.css'
const LogoImage = () => (
    <img className={styles.logo} src={logoImage} alt="Logo"/>
)

export default LogoImage