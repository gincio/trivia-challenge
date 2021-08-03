import React from 'react'
import styles from './ScreenWrapper.module.css'

type ScreenMode = "primary" | "secondary"
type ScreenProps = {
    mode?: ScreenMode,
    children?: React.ReactNode
}

const ScreenWrapper = ({ mode = "primary", children }: ScreenProps) => (
    <div className={`${styles[mode]} ${styles.screen}`}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
)

export default ScreenWrapper