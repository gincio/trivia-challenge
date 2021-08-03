import React from 'react'
import FormBackgroundDecorations from '../components/background-decorations/FormBackgroundDecorations'
import Header from '../components/Header'
import StartGameForm from '../components/StartGameForm'
import styles from './Start.module.css'

const Start = () => (
    <div className={styles.wrapper}>
        <FormBackgroundDecorations />
        <Header />
        <StartGameForm />
    </div>
    )

export default Start