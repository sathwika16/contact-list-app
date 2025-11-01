import { useState } from "react";

export default function ContactList({ contacts, onDelete }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.name}
          className={`contact-card ${
            expanded === contact.name ? "expanded" : ""
          }`}
          onClick={() => toggleExpand(contact.name)}
        >
          <div className="contact-name">{contact.name}</div>

          {expanded === contact.name && (
            <div className="contact-details">
              <div>📞 {contact.phone}</div>
              <div>✉️ {contact.email}</div>
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
      ))}
    </div>
  );
}
