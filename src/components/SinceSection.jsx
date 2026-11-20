import React from 'react';
import './SinceSection.css';

export default function SinceSection() {
  return (
    <section className="since-section" aria-labelledby="since-heading">
      <div className="since-photo" aria-hidden="true">
        <img src="/nitro-football-bg.jpg" alt="" />
        <span className="since-photo-shade" />
      </div>
      <div className="since-can" aria-hidden="true">
        <img src="/Can.png" alt="" />
      </div>
      <h1 className="since-heading" id="since-heading">
        <span>SINCE</span>
        <span>2002</span>
        <span>PROD</span>
        <span>UCING</span>
      </h1>
    </section>
  );
}
