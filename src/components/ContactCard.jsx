function ContactCard({ contact, onDelete }) {
  return (
    <li className="contact-card">
      <div>
        <strong>{contact.name}</strong>
        <br />
        <small>{contact.email}</small>
      </div>
      <button onClick={() => onDelete(contact.id)}>❌</button>
    </li>
  );
}

export default ContactCard;