import React, { useState } from 'react';

const Chats = () => {
  const [message, setMessage] = useState("");

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#e5ddd5",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      width: "300px",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #ddd",
      padding: "20px",
      overflowY: "auto",
    },
    chatWindow: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff",
    },
    header: {
      padding: "10px",
      backgroundColor: "#075e54",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    chatBody: {
      flexGrow: 1,
      padding: "10px",
      overflowY: "auto",
    },
    message: {
      maxWidth: "60%",
      margin: "10px 0",
      padding: "10px",
      borderRadius: "8px",
      wordWrap: "break-word",
    },
    sent: {
      alignSelf: "flex-end",
      backgroundColor: "#dcf8c6",
    },
    received: {
      alignSelf: "flex-start",
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
    },
    footer: {
      display: "flex",
      padding: "10px",
      backgroundColor: "#f0f0f0",
    },
    input: {
      flexGrow: 1,
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "20px",
      outline: "none",
    },
    button: {
      marginLeft: "10px",
      padding: "10px 15px",
      backgroundColor: "#075e54",
      color: "white",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
    },
    emojiButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    emojiButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
    },
    contactList: {
      display: "flex",
      flexDirection: "column",
    },
    contact: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #ddd",
    },
    profilePic: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.contactList}>
          {["Sreejita Dhar", "Pancham","Jhalak Palai","Anushka","Kanishka", "Ambalika Mishra", "Abhishek Kumar", "Nitin Verma"].map((contact, index) => (
            <div key={index} style={styles.contact}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  style={styles.profilePic}
                />
                <div>
                  <h4 style={{ margin: 0 }}>{contact}</h4>
                  <p style={{ margin: 0, fontSize: "12px" }}>Available</p>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#777" }}>Nov 29</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div style={styles.chatWindow}>
        <div style={styles.header}>
          <div>
            <h4 style={{ margin: 0 }}>Sreejita Dhar</h4>
            <p style={{ margin: 0, fontSize: "12px" }}>Available on mobile</p>
          </div>
          <div>
            <button style={{ background: "none", border: "none", color: "white" }}>⋮</button>
          </div>
        </div>

        {/* Chat Body */}
        <div style={styles.chatBody}>
          <div style={{ ...styles.message, ...styles.sent }}>You're welcome 😊</div>
          <div style={{ ...styles.message, ...styles.received }}>Okok</div>
          <div style={{ ...styles.message, ...styles.received }}>Thanksss</div>
          <div style={{ ...styles.message, ...styles.sent }}>You're welcome 😊</div>
        </div>

        {/* Emoji Reactions */}
        <div style={styles.emojiButtons}>
          <button style={styles.emojiButton}>😊</button>
          <button style={styles.emojiButton}>👍</button>
          <button style={styles.emojiButton}>❤️</button>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <input
            type="text"
            placeholder="Write a message..."
            style={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button style={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
