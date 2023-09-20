import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCardsIsLoading } from 'redux/selectors';
import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';

export default function Catalog() {
  const isLoading = useSelector(getCardsIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <CarsList />
    </>
  );
}
