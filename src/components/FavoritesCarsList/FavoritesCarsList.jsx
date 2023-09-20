import CarsListItem from 'components/CarsListItem/CarsListItem';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from 'redux/selectors';
import { fetchCards } from 'redux/operations';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';
import css from '../FavoritesCarsList/FavoritesCarsList.module.css';

export default function FavoritesCarsList() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const [cardToOpen, setCardToOpen] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    setFavorites()
  }, [favorites]);

  let savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));
  const list = useSelector(getAllCards);
  if (!savedFavorites) {
    savedFavorites = [];
  }
  let cardList = list.filter(card => savedFavorites.includes(card.id));

  const changeFavorite = id => {
    setFavorites('id');
  };

  const openModal = card => {
    setCardToOpen(card);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
         { (savedFavorites.length > 0) ? 
      <ul className={css.favoritesCarsList}>
        {cardList.map((car, id) => {
          return (
            <CarsListItem
              car={car}
              key={car.id}
              openModal={openModal}
              changeFavorite={changeFavorite}
            />
          );
        })}
      </ul> :
       <div className={css.notSelectedFavorites}>
       You have not selected your favorite cars
     </div>
   }


      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard closeModal={closeModal} card={cardToOpen} />
        </Modal>
      )}
    </div>
  );
}
