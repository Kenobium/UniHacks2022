import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import styles from '/styles/Post.module.css';

const PostCard = styled(Paper)({
    padding: '1rem',
    display: 'grid',
});

const FormCard = styled(Card)({
    padding: '1rem',
    display: 'grid',
});

export function Post({ post }) {
    return (
        <PostCard elevation={6}>
            <h2 className={styles.subject}>{post.subject}</h2>
            <h3 className={styles.profile}>{post.profile}</h3>
            <p className={styles.content}>{post.content}</p>
        </PostCard>
    )
}

export function PostForm({onSubmit, profile, subject, content, setProfile, setSubject, setContent}) {
    return (
        <FormCard>
            <form onSubmit={onSubmit}>
                Profile <input type="text" name="profile" value={profile} onChange={e => setProfile(e.target.value)} />
                Subject <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                Content <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
                <button>Submit</button>
            </form>
        </FormCard>
    )
}