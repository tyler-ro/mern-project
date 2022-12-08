import React, { useEffect, useState } from "react";
import { Input, Grid, TextField } from "@mui/material";
import "./Conversation.css";
import axios from "axios";
import { Avatar, Badge } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Conversation({ currentUserId, chat, online, user }) {
  const [userData, setUserData] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(null);

  //find all users but the current user
  useEffect(() => {
    const friendId = chat.members.find((id) => id !== currentUserId);
    async function getUserData() {
      try {
        const { data } = await axios.get(`api/users/${friendId}`);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  //still working on this
  useEffect(() => {
    const countUnreadMessages = async () => {
      try {
        let count = 0;
        let { data } = await axios.get(`api/messages/${chat._id}`);
        data.forEach((message) => {
          if (message.readStatus === null) {
            count++;
          }
        });
        setUnreadMessages(count);
      } catch (error) {
        console.log(error);
      }
    };
    countUnreadMessages();
  }, [unreadMessages]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "25vw",
        padding: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={2}>
        <img
          className="profileImg"
          src={
            userData?.profilePicture === ""
              ? "/logo192.png"
              : userData?.profilePicture
          }
        />
      </Grid>
      <Grid item xs={6}>
        {unreadMessages === 0 ? (
          <span>{userData?.firstname}</span>
        ) : (
          <span>
            <strong>{userData?.firstname}</strong>
          </span>
        )}
      </Grid>
      <Grid item xs={3}>
        Chat Member is: {online ? "online" : "offline"}
      </Grid>
      <Grid item xs={1}>
        {unreadMessages === 0 ? "" : <strong>{unreadMessages}</strong>}
      </Grid>
    </Grid>
  );
}
