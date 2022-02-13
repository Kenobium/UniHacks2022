import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import common from '/styles/common.module.css'
import styles from '/styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container} style={{ backgroundColor: '#f99' }}>
            <Head>
                <title>Login - et al.</title>
                <meta name="description" content="Developed for NCSSM UniHacks 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={common.main}>
                <div className={common.modal}>
                    <h2 className={common.title}>Welcome back.</h2>
                    <form className={common.login}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button className={common.button} type="submit">Log In</button>
                    </form>
                    <p>New user? <Link href="/signup"><strong><a className={common.otherAction}>Sign Up.</a></strong></Link></p>
                </div>
            </main>
            <Footer />
        </div>
    )
}