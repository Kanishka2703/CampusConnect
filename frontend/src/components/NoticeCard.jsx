import React from "react";

const NoticeCard = ({ title, content }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "350px", // Adjusted width for better card size
    height: "auto", // Flexible height
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    overflow: "hidden",
  },
  cardHover: {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  content: {
    fontSize: "1rem",
    color: "#7f8c8d",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
};

export default NoticeCard;
