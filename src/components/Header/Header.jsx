import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {


  return (
    <div className={css.container}>
      <Link to={'/'} className={css.logo}>
        RentCars
      </Link>

      <nav className={css.nav}>
        <Link to="/" className={css.navLink}>
          Home
        </Link>
        <Link to="/catalog" className={css.navLink}>
          Catalog
        </Link>
        <Link to="/favorites" className={css.navLink}>
          Favorites
        </Link>
      </nav>
    </div>
  );
}
