import styles from './FormButton.module.css'

type FormButtonType = {
    text: string,
    clickHandler: (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const FormButton = ({text, clickHandler}:FormButtonType) => {
    return (
        <button className={styles.formButton} onClick={clickHandler}>{text}</button>
    )
}

export default FormButton