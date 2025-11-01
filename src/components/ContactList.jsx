import { useState } from "react";
import "./ContactList.css";

export default function ContactList({ contacts, onDelete }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    <div className="contact-list">
      <div className="dial-btn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Dial"
          className="dial-icon"
        />
      </div>

      {contacts.map((contact) => (
        <div
          key={contact.name}
          className={`contact-card ${expanded === contact.name ? "expanded" : ""}`}
          onClick={() => toggleExpand(contact.name)}
        >
          <div className="contact-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Profile"
              className="profile-icon"
            />
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              {expanded === contact.name && (
                <div className="contact-details">
                  <div>📞 {contact.phone}</div>
                  {contact.email && <div>✉️ {contact.email}</div>}
                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(contact.name);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

