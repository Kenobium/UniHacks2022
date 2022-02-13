import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Post, PostForm } from '/components/Post';
import styles from '/styles/Feed.module.css';

export default function Feed() {
    const [posts, setPosts] = useState([{
        profile: 'John Doe',
        subject: 'Subject',
        content: 'Content'
    }]);
    const [profile, setProfile] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts, {
            profile,
            subject,
            content
        }]);
        setProfile('');
        setSubject('');
        setContent('');
    }

    return (
        <div className={styles.container}>
            <Stack spacing={4}>
                <PostForm onSubmit={handleSubmit} profile={profile} subject={subject} content={content} setProfile={setProfile} setSubject={setSubject} setContent={setContent} />
                {posts.map(post => <Post post={post} />)}
            </Stack>
        </div>
    )
}