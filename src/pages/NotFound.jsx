import { Link } from 'react-router-dom';
import './SimplePage.css';

export default function NotFound() {
  return (
    <section className="simple-page not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>LOST YOUR <span>CHARGE?</span></h1>
      <Link className="not-found-link" to="/">Back to home</Link>
    </section>
  );
}
