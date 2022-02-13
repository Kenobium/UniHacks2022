import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import styles from "/styles/Profile.module.css";

export default function ProfileView(user) {
    return (
        <Grid container spacing={6}>
            <Grid item xs={2}>
                <div className={styles.profilePic}>
                    <Avatar src='/PNG/pic.jpg' sx={{ width: 128, height: 128 }}/>
                </div>
            </Grid>
            <Grid item xs={9}>
                <h1 className={styles.profileName}>John Doe</h1>
                <p className={styles.profileDescription}>@j.doe</p>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={9}>
                <Stack spacing={2}>
                    <div>
                        <h3>About</h3>
                        <p>ablablalba</p>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <p>ablablalba</p>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <p>ablablalba</p>
                    </div>
                    <div>
                        <h3>Contact info</h3>
                        <p>ablablalba</p>
                    </div>
                </Stack>
            </Grid>
        </Grid>

    );
}

