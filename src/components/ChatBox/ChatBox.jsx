import React, { useEffect, useState } from "react";
import Messages from "../Messages/Messages";
import InputEmoji from "react-input-emoji";
import axios from "axios";

export default function ChatBox({
  currentChat,
  currentUserId,
  setMessages,
  setNewMessage,
  messages,
  newMessage,
  socket
}) {
  const [userData, setUserData] = useState(null);

  // get chat member data
  useEffect(() => {
    const userId = currentChat?.members?.find((id) => id !== currentUserId);
    setUserData(userId);
  }, [currentChat, currentUserId]);

  //handle functions

  function handleChange(inputText) {
    setNewMessage(inputText);
  }
  async function handleSend(e) {
    e.preventDefault();
    const messageInfo = {
      chatId: currentChat._id,
      senderId: currentUserId,
      text: newMessage,
    };
    const receiverId = currentChat?.members?.find((id) => id !== currentUserId)
    try {
      let newMessage = await axios.post(`api/messages`, messageInfo);
      socket.current.emit('send-message', {messageInfo: newMessage.data, receiverId});
      setMessages([...messages, newMessage.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {currentChat ? (
        <div style={{ border: "1px solid black" }}>
          This ChatBox will render the container for a conversation the user
          selects
          <hr />
          <Messages
            messages={messages}
            setMessages={setMessages}
            socket={socket}
            currentChat={currentChat}
            currentUserId={currentUserId}
          />
          <InputEmoji value={newMessage} onChange={handleChange} />
          <button onClick={handleSend}>Send</button>
        </div>
      ) : (
        <span>Click a Chat to Start Conversation</span>
      )}
    </>
  );
}
