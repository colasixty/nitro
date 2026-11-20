import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <section className="home-hero" aria-label="NITRO energy drink">
      <div className="home-hero__word" aria-hidden="true">NITRO</div>

      <div className="home-hero__product">
        <img src="/Can.png" alt="Black NITRO energy drink can with neon yellow lightning artwork" />
      </div>

      <div className="home-hero__bottom">
        <p className="home-hero__intro">
          WOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
          <br className="desktop-only" /> ELIT. NUNC VULPUTATE LIBERO ET VELIT INTERDUM, AC.
        </p>

        <div className="home-hero__actions">
          <Link className="hero-button hero-button--light" to="/shop">Buy Now</Link>
          <Link className="hero-button hero-button--outline" to="/about">More info</Link>
        </div>

        <div className="home-hero__socials" aria-label="Social media">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><span>𝕏</span></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        </div>
      </div>
    </section>
  );
}
