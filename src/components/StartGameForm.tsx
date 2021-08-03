import React, { useState } from 'react'
import FormButton from './FormButton'
import AmountIcon from './icons/AmountIcon'
import CupIcon from './icons/CupIcon'
import styles from './StartGameForm.module.css'

type Difficulty = "hard" | "easy"

const StartGameForm = () => {
    const [difficulty, setDifficulty] = useState<Difficulty>("hard")
    const [amount, setAmount] = useState<number>(10)

    const onDifficultyChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const newDifficulty = ev.currentTarget.value as Difficulty
        console.log(newDifficulty)
        setDifficulty(newDifficulty)
    }

    const onAmountChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = ev.currentTarget.value
        console.log(newAmount)
        if (newAmount !== null)
            setAmount(+newAmount)
    }

    const onStartGameClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log({difficulty, amount})
    }


    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <div className={styles.inputDescriptionBox}>
                    <CupIcon />
                    <span>Difficulty</span>
                </div>
                <select value={difficulty} onChange={onDifficultyChange}>
                        <option value="easy">Easy</option>
                        <option value="hard">Hard</option>
                    </select>
            </div>
            <div className={styles.formGroup}>
                <div className={styles.inputDescriptionBox}>
                    <AmountIcon />
                    <span>Amount</span>
                </div>
                <input type="number" min="1" max="100" value={amount} onChange={onAmountChange} />
            </div>
            <div className={styles.formGroup}>
                <FormButton text="Start game" clickHandler={onStartGameClick} />
            </div>
        </form>
    )
}

export default StartGameForm