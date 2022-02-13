import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';
import Feed from '/components/Feed';
import Footer from '/components/Footer';
import common from '/styles/common.module.css';

const NavBar = styled(AppBar)({
    backgroundColor: 'whitesmoke',
    color: '#fff',
    padding: '0.5rem'
});

export default function Main() {
    return (
        <div className={common.container}>
            <Feed />
            <Footer profile />
        </div>
    )
}
