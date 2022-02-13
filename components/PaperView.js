import common from '../styles/common.module.css'
import styles from '../styles/Profile.module.css'
import Card from '@mui/material/Card'

export default function PaperView() {
    return (
        <Card>
            <div className={styles.papers_container}>
                <h2>John's papers</h2>
            </div>
        </Card>
    )
}