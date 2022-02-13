import { useState } from 'react';
import Post from '/components/Post';

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
        <div className="container">
            <form onSubmit={handleSubmit}>
                Profile <input value={profile} onChange={e => {
                    setProfile(e.target.value);
                }}/>
                Subject <input value={subject} onChange={e => {
                    setSubject(e.target.value);
                }}/>
                Content <input value={content} onChange={e => {
                    setContent(e.target.value);
                }}/>
                <button>Submit</button>
            </form>
            {posts.map(post => <Post post={post}/>)}
        </div>
    )
}