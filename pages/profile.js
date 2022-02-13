import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import common from '/styles/common.module.css'
import styles from '/styles/Profile.module.css'
import ProfileView from '/components/ProfileView'
import PaperView from '/components/PaperView'
import Footer from '/components/Footer'

export default function Profile() {
    return (
        <div className={common.container}>
            <Head>
                <title>et al.</title>
                <meta name="description" content="Developed for NCSSM UniHacks 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={common.main}>
                <div className={styles.profile_container}>
                    <ProfileView />
                    <PaperView />
                </div>
            </main>
            <Footer />
        </div>
    )
}
