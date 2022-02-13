
import Paper from '@mui/material/Paper';

export default function Post({post}) {
    return (
        <Paper elevation={6}>
            {post.profile}
            {post.subject}
            {post.content}
        </Paper>
    )
}