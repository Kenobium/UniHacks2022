import Link from 'next/link'
import Image from 'next/image'
import common from '../styles/common.module.css'
import { Description } from '@mui/icons-material'

export default function Navbar() {
    return (
        <nav className={common.navbar}>
            <div className={common.navbar_container}>
                <Link className={common.navbar_logo} href="/">
                    <Image src="/PNG/logo.png" alt="et al." width={112} height={39}/>
                </Link>
                <p className={common.navbar_description}>Research better, together.</p>
                <div className={common.navbar_links}>
                    <a href="/profile">Profile</a>
                </div>
            </div>

        </nav>
    )
}