import styles from './InputGroup.module.css'

type InputGroupParams = {
    iconComponent: React.ReactNode,
    name: string,
    description: string,
    inputArgs?: React.HTMLAttributes<HTMLElement>[]
}

const InputGroup = ({iconComponent, name, description, inputArgs}: InputGroupParams) => (
    <div className={styles.inputGroup}>
        <label className={styles.inputLabelBox} htmlFor={name}>
            {() => iconComponent}
            <span>{description}</span>
        </label>
        <input name={name} {...inputArgs} />
    </div>
)

export default InputGroup