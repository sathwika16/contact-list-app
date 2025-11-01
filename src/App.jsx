import { useState } from "react";
import "./styles.css";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import DialerModal from "./components/DialerModal";
import SearchBar from "./components/SearchBar";
import { contactsData } from "./data";

export default function App() {
  const [contacts, setContacts] = useState(
    [...contactsData].sort((a, b) => a.name.localeCompare(b.name))
  );
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDialer, setShowDialer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddContact = (newContact) => {
    const updated = [...contacts, newContact].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(updated);
    setShowAddModal(false);
  };

  const handleDelete = (name) => {
    setContacts(contacts.filter((c) => c.name !== name));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
     <header className="top-bar">
  <h1 className="heading">My Contacts</h1>
  <div className="search-add-container">
    <SearchBar onSearch={setSearchQuery} />
    <button className="add-btn" onClick={() => setShowAddModal(true)}>
      ➕ Add Contact
    </button>
  </div>
</header>

<ContactList contacts={filteredContacts} onDelete={handleDelete} />

{/* 📞 Floating Dial Button */}
<button className="dial-btn" onClick={() => setShowDialer(true)}>
  📞
</button>

{/* Modals */}
{showAddModal && (
  <AddContactForm
    onAddContact={handleAddContact}
    onClose={() => setShowAddModal(false)}
  />
)}
{showDialer && <DialerModal onClose={() => setShowDialer(false)} />}
    </div>
  );
}
