import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import common from '../styles/common.module.css'
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <div className={common.container}>
      <Head>
        <title>et al.</title>
        <meta name="description" content="Developed for NCSSM UniHacks 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={common.main}>
        <div>
          <h1 className={styles.title}>
            Welcome to <span style={{ color: '#f99' }}>et al.</span>
          </h1>
          <p className={styles.description}>Research together, better.</p>
        </div>
        <div className={common.buttons}>
          <Link href="/login">
            <a className={common.button}>Log In</a>
          </Link>
          <Link href="/signup">
            <a className={common.button}>Sign Up</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div >
  )
}
