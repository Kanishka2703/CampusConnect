import React from "react";

const ImpContacts = () => {
  const contacts = [
    { title: "Main Gate (Bhidoli)", phone: "9997799855" },
    { title: "Main Gate (Kandoli)", phone: "999785855" },
    { title: "Security Office", phone: "6396240999" },
    { title: "Hostel Manager (Boys)", phone: "4567812564821" },
    { title: "Hostel Manager (Girls)", phone: "4567812564822" },
    { title: "Mess Incharge", phone: "4567812564823" },
    { title: "Medical Emergency", phone: "4567812564824" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Important Contacts</h1>
      <div style={styles.card}>
        <h2 style={styles.subheading}>Helpline Numbers</h2>
        {contacts.map((contact, index) => (
          <div key={index} style={styles.contact}>
            <p style={styles.title}>{contact.title}:</p>
            <p style={styles.phone}>{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  subheading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#444",
    textAlign: "center",
  },
  contact: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "5px",
  },
  title: {
    fontWeight: "500",
    color: "#555",
  },
  phone: {
    fontWeight: "bold",
    color: "#007BFF",
  },
};

export default ImpContacts;
