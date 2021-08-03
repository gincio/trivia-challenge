import styles from './FormBackgroundDecorations.module.css'
import FormBottomLeftDecoration from './FormBottomLeftDecoration'
import FormBottomRightDecoration from './FormBottomRightDecoration'
import FormTopLeftDecoration from './FormTopLeftDecoration'
import FormTopRightDecoration from './FormTopRightDecoration'

const FormBackgroundDecorations = () => (
    <div className={styles.bgWrapper} >
        <div className={`${styles.decoration} ${styles.topLeftDecoration}`}><FormTopLeftDecoration /></div>
        <div className={`${styles.decoration} ${styles.topRightDecoration}`}><FormTopRightDecoration /></div>
        <div className={`${styles.decoration} ${styles.bottomLeftDecoration}`}><FormBottomLeftDecoration /></div>
        <div className={`${styles.decoration} ${styles.bottomRightDecoration}`}><FormBottomRightDecoration /></div>
    </div>
)

export default FormBackgroundDecorations