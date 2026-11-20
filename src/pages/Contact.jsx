import React from 'react';
import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './SimplePage.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="simple-page contact-page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>CONTACT <span>NITRO</span></h1>
      <p className="page-lead">Have a question about NITRO? Send us a message.</p>

      <div className="contact-layout">
        <div className="contact-details">
          <p><Mail size={18} /> hello@nitro.example</p>
          <p><MapPin size={18} /> NITRO Energy Drink</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message..." required />
          </label>
          <button type="submit"><Send size={16} /> Send message</button>
          {submitted && <p className="form-success" role="status">Thanks! Your message is ready to be connected to a backend.</p>}
        </form>
      </div>
    </section>
  );
}
