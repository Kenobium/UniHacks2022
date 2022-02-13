import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import common from '/styles/common.module.css';

const AccountCircle = styled(AccountCircleIcon)({
    color: '#f99',
    cursor: 'pointer',
    fontSize: '2.5rem',
    justifySelf: 'flex-end',
    marginLeft: 'auto',
});

export default function Footer({profile}) {
    return (
        <footer className={common.footer}>
            <span className={common.logo}>
                <Link href="/"><Image src="/PNG/logo.png" alt="et al. Logo" width={112} height={39} /></Link>
            </span>
            {profile && <Link href="/profile"><AccountCircle/></Link>}
        </footer>
    )
}
