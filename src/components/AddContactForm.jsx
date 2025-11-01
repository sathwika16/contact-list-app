import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./AddContactForm.css";

export default function AddContactForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    onAdd(formData);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  return (
    <div className="add-contact-overlay" onClick={onClose}>
      <div className="add-contact" onClick={(e) => e.stopPropagation()}>
        <div className="add-contact-header">
          <h3>Add Contact</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
