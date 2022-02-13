import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import common from '/styles/common.module.css'

export default function Onboarding() {
    return (
        <div className={common.container}>
            <Head>
                <title>Onboarding - et al.</title>
                <meta name="description" content="Developed for NCSSM UniHacks 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={common.main}>
                <h2 className={common.title}>Thanks for joining!</h2>
                <p className={common.description}>Let's set up your account.</p>
            </main>
            <footer className={common.footer}>
                <span className={common.logo}>
                    <Link href="/"><Image src="/PNG/logo.png" alt="et al. Logo" width={112} height={39} /></Link>
                </span>
            </footer>
        </div>
    )
}