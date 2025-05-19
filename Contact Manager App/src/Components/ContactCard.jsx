import React, { useState, useEffect } from 'react';
import './ContactCard.css';

function ContactCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('http://localhost:3000/Contact')
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId === null) {
      addContact();
    } else {
      updateContact();
    }
  }

  // POST method - New Contact
  function addContact() {
    fetch("http://localhost:3000/Contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Contact Added");
        clearForm();
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  // PUT method - Update Contact
  function updateContact() {
    fetch(`http://localhost:3000/Contact/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Contact Updated");
        clearForm();
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  // DELETE method
  function handleDelete(id) {
    fetch(`http://localhost:3000/Contact/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        alert("Contact Deleted");
        fetchData();
      })
      .catch((err) => console.log(err));
  }


  function handleEdit(el) {
    setName(el.name);
    setEmail(el.email);
    setPhone(el.phone);
    setEditId(el.id);
  }


  function clearForm() {
    setName('');
    setEmail('');
    setPhone('');
    setEditId(null);
  }

return (
  <div className="container">
    <h1>{editId ? 'Edit Contact' : 'Create Contact'}</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Contact Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='Contact Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="submit" value={editId ? "Update" : "Add"} />
    </form>

    <h2>Contact List</h2>
    <div>
      {contacts.map((el) => (
        <div className="contact-card" key={el.id}>
          <p><strong>Name:</strong> {el.name}</p>
          <p><strong>Email:</strong> {el.email}</p>
          <p><strong>Phone:</strong> {el.phone}</p>
          <button onClick={() => handleEdit(el)}>Edit</button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
);

}

export default ContactCard;
