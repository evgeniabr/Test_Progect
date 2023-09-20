import React from 'react';
import css from './ModalCard.module.css';

import { AiOutlineClose } from 'react-icons/ai';
export default function ModalCard({ closeModal, card }) {
  const {
    rentalPrice,
    address,
    year,
    make,
    model,
    type,
    id,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
  } = card;
  const normaliseAddress = address.split(',').slice(1);

  // Click close window
  const closeWindow = e => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div onClick={closeModal} className={css.container}>
      {/* Close button */}
      <button type="button" className={css.closeBtn} onClick={closeWindow}>
        <AiOutlineClose />
      </button>
      {/* Image */}
      <img src={img} alt="Car img" className={css.cardImg} />

      {/* Header */}
      <div className="DetailedCard__title-block">
        <h3 className={css.title}>
          {make} <span>{model}</span>, {year}
        </h3>
      </div>

      {/* Dateils */}
      <div className={css.carProperties}>
        <ul>
          <li>
            {normaliseAddress[0]} <span>|</span>
          </li>
          <li>
            {normaliseAddress[1]} <span>|</span>
          </li>
          <li>
            id: {id} <span>|</span>
          </li>
          <li>
            year: {year}
            <span>|</span>
          </li>
          <li>Type: {type}</li>
        </ul>
        <ul>
          <li>
            Fuel Consumption: {fuelConsumption} <span>|</span>
          </li>
          <li>Engine Size: {engineSize}</li>
        </ul>
      </div>

      {/* Description */}
      <h3 className={css.description}>{description}</h3>

      {/* Accessories and functionalities: */}
      <h3 className={css.accessoriesTitle}>Accessories and functionalities:</h3>
      <ul className={css.accessoriesList}>
        {accessories.map((item, index) => {
          return (
            <li key={index}>
              {item} <span className="span">|</span>
            </li>
          );
        })}
      </ul>

      {/* Rental Conditions:  */}
      <h3 className={css.conditionsTitle}>Rental Conditions:</h3>
      <ul className={css.conditionsList}>
        <li>
          Minimum age : <span>25</span>
        </li>
        <li>Valid driver’s license</li>

        <li>Security deposite required </li>
        <li>
          Mileage: <span>5,858</span>
        </li>
        <li>
          Price: <span>{rentalPrice}</span>
        </li>
      </ul>

      {/* Button */}
      <a href="tel:+380730000000" className={css.btn}>
        Rental car
      </a>
    </div>
  );
}
