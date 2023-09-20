import CarsListItem from 'components/CarsListItem/CarsListItem';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInList, getCards } from 'redux/selectors';
import { fetchAllCards, fetchCards } from 'redux/operations';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';
import css from '../CarsList/CarsList.module.css';

export default function CarsList() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  
  useEffect(() => {
    dispatch(fetchCards(page));
    dispatch(fetchAllCards());
  }, [dispatch, page]);

  let cardList = useSelector(getCards);
  const numberOfCards = useSelector(cardsInList);
//   const allCardList = useSelector(getAllCards);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const [cardToOpen, setCardToOpen] = useState([]);
  const changeFavorite = e => {};

  const openModal = card => {
    setCardToOpen(card);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const changePage = e => {
    e.preventDefault();
    
    setPage(page + 1);
    dispatch(fetchCards(page + 1));
  };

  const pages = numberOfCards / 8;
  const showLoadMoreButton = pages > page;
  return (
    <>
      <div className={css.container}>
        <ul className={css.cardsList}>
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
        </ul>
        {showLoadMoreButton &&   <button
          type="button"
          className={css.isButtonVisible}
          onClick={changePage}
        >
          Load more
        </button>}

       
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard closeModal={closeModal} card={cardToOpen} />
        </Modal>
      )}
    </>
  );
}
