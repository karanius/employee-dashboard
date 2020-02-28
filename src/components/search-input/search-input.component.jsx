import React from 'react';
import './search-input.styles.scss';

const SerchInput = ({inputOnChangeHanlde}) => {
  return(
    <section className="input-wrapper">
      <label className="input-label" htmlFor="search" >Filter by name:</label>
      <input onChange={inputOnChangeHanlde} className="input-itself" id="search" type="text" />
    </section>
  )
}

export default SerchInput