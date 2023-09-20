import React, { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import css from './CarsListItem.module.css';
import pictureDefault from '../../images/default-image.avif'
export default function CarsListItem({ car, changeFavorite, openModal }) {
  const {
    model,
    year,
    rentalPrice,
    address,
    make,
    rentalCompany,
    type,
    id,
    functionalities,
    img,
  } = car;

  const picture = img ? img : pictureDefault;
  const [favorites, setFavorites] = useState([]);
  let list = [];

  const normaliseType =
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const normaliseAddress = address.split(',').slice(1);

  const makefavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));
    if (savedFavorites) {
      if (savedFavorites.includes(id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  let isfavorite = makefavorite();

  useEffect(() => {}, [favorites]);

  const showModal = e => {
    e.preventDefault();
    openModal(car);
  };

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));
    if (savedFavorites) {
      list = savedFavorites;
    }

    if (list.includes(id)) {
      let newList = list.filter(favoriteCarId => favoriteCarId !== id);
      localStorage.setItem('favoriteCars', JSON.stringify(newList));
      setFavorites(newList);
      changeFavorite(id);
    } else {
      localStorage.setItem('favoriteCars', JSON.stringify([...list, id]));
      setFavorites([...list, id]);
      changeFavorite(id);
    }
  };

  return (
    <li className={css.wraper}>
      <img src={picture} alt={model} className={css.img} />
      {isfavorite ? (
        <button
          type="button"
          onClick={toggleFavorite}
          className={css.addToFavoriteBtn}
        >
          <FaHeart className={css.favoriteIcon} />
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleFavorite}
          className={css.addToFavoriteBtn}
        >
          <FiHeart className={css.icon} />
        </button>
      )}
      <div className={css.titleWraper}>
        <h3 className={css.title}>
          {make} <span>{model}</span>, {year}
        </h3>
        <p className={css.title}>{rentalPrice}</p>
      </div>
      <ul className={css.property}>
        <li>{normaliseAddress[0]}</li>
        <li>{normaliseAddress[1]}</li>
        <li>{rentalCompany}</li>
        <li>Premium </li>
        <li>{normaliseType}</li>
        <li>{make}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </ul>
      <button className={css.btn} type="button" onClick={showModal}>
        Learn more
      </button>
    </li>
  );
}
