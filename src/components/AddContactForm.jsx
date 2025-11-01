import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./AddContactForm.css";

export default function AddContactForm({ onAddContact, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Name and Phone are required!");
      return;
    }
    onAddContact(form);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Contact</h2>
          <FaTimes className="close-btn" onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Email (optional)</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="submit" className="add-contact-btn">
              ✅ Add Contact
            </button>
            <button type="button" className="back-btn" onClick={onClose}>
              ⬅️ Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
