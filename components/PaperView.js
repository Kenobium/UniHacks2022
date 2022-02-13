import common from '../styles/common.module.css'
import styles from '../styles/Profile.module.css'
import Paper from '@mui/material/Paper'

export default function PaperView() {
    return (
        <Paper elevation={6}>
            <div className={styles.papers_container}>
                <h2>User's papers</h2>
            </div>
        </Paper>
    )
}