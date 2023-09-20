import React from 'react';
import FavoritesCarsList from 'components/FavoritesCarsList/FavoritesCarsList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCardsIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export default function Favorites() {
  const isLoading = useSelector(getCardsIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <FavoritesCarsList /> :
    </>
  );
}
