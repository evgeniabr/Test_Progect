import { ColorRing } from 'react-loader-spinner';
import React from 'react'
import css from '../Loader/Loader.module.css'

export default function Loader() {
  return (
    <div className={css.container}>
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{ margin: '10px auto' }}
    wrapperClass="blocks-wrapper"
    colors={['#6d5be1', '#60b9f4', '#6a86f8', '#b881bd', '#3225bd']}
  />
  </div>
  )
}
