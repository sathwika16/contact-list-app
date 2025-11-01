import { useState } from "react";
import "./styles.css";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import { contacts as initialContacts } from "./data";
import DialerModal from "./components/DialerModal";

export default function App() {
  const [contacts, setContacts] = useState(
    [...initialContacts].sort((a, b) => a.name.localeCompare(b.name))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDialer, setShowDialer] = useState(false);

  const handleAddContact = (contact) => {
    const updated = [...contacts, contact].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(updated);
    setShowForm(false);
  };

  const handleDelete = (name) => {
    setContacts(contacts.filter((c) => c.name !== name));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Contacts</h1>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {showForm && <AddContactForm onAddContact={handleAddContact} />}

      <ContactList contacts={filteredContacts} onDelete={handleDelete} />

      <div className="floating-btns">
        <button
          className="fab add"
          title="Add Contact"
          onClick={() => setShowForm(!showForm)}
        >
          +
        </button>
        <button
          className="fab dial"
          title="Open Dialer"
          onClick={() => setShowDialer(true)}
        >
          📞
        </button>
      </div>

      {showDialer && <DialerModal onClose={() => setShowDialer(false)} />}
    </div>
  );
}