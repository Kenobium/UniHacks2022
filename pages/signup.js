import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import common from '/styles/common.module.css'
import styles from '/styles/Login.module.css'

export default function Signup() {
    return (
        <div className={styles.container} style={{ backgroundColor: '#f99' }}>
            <Head>
                <title>Signup - et al.</title>
                <meta name="description" content="Developed for NCSSM UniHacks 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={common.main}>
                <div className={common.modal}>
                    <h2 className={common.title}>Glad you're here.</h2>
                    <p className={common.description}>We just need some basic info from you.</p>
                    <form className={common.signup}>
                        <select>
                            <option value="">Select your role</option>
                            <option value="student">Professional</option>
                            <option value="student">Reader</option>
                        </select>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button className={common.button} type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link href="/login"><strong><a className={common.otherAction}>Log In.</a></strong></Link></p>
                </div>
            </main>
            <footer className={styles.footer}>
                <span className={common.logo}>
                    <Link href="/"><Image src="/PNG/logo.png" alt="et al. Logo" width={112} height={39} /></Link>
                </span>
            </footer>
        </div>
    )
}